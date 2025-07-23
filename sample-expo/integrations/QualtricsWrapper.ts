import Qualtrics from "react-native-qualtrics";

export interface QualtricsProjectInfo {
  brandID: string;
  projectID: string;
  extRefId?: string;
}

// Module-level state
let isProjectInitialized = false;
let projectInfo: QualtricsProjectInfo | null = null;

/**
 * Set project information required for initialization
 */
export const setProjectInfo = (info: QualtricsProjectInfo): void => {
  projectInfo = info;
};

/**
 * Check if project is initialized
 */
export const isInitialized = (): boolean => {
  return isProjectInitialized;
};

/**
 * Ensure project info is set before initialization
 */
const ensureProjectInfoIsSet = (): void => {
  if (!projectInfo) {
    throw new Error(
      "Qualtrics is not configured properly. " +
        "Configure your credentials in the constants/QualtricsConfig.ts file."
    );
  }
};

/**
 * Initialize Qualtrics project with the configured project info
 */
export const initialize = async () => {
  ensureProjectInfoIsSet();

  if (isProjectInitialized) {
    return Promise.resolve({ success: true });
  }

  return new Promise((resolve, reject) => {
    console.log("Initializing Qualtrics...");

    Qualtrics.initializeProjectWithExtRefId(
      projectInfo!.brandID,
      projectInfo!.projectID,
      projectInfo!.extRefId || "",
      (initializationResults) => {
        console.log("Qualtrics initialization results:", initializationResults);
        for (let intercept in initializationResults) {
          if (!initializationResults[intercept].passed) {
            reject(new Error("Qualtrics initialization failed"));
          }
          isProjectInitialized = true;
          resolve(initializationResults);
        }
      }
    );
  });
};


/**
 * Ensure project is initialized before calling SDK methods
 */
const ensureProjectIsInitialized = async (): Promise<void> => {
  ensureProjectInfoIsSet();

  if (!isProjectInitialized) {
    console.log("Project not initialized. Initializing...");
    await initialize().catch(console.error);
  }
};

/**
 * Evaluate project and automatically display intercepts that pass targeting conditions
 */
export const evaluateAndDisplayProject = async () => {
  await ensureProjectIsInitialized();

  Qualtrics.evaluateProject((targetingResults) => {
    console.log(targetingResults);
    for (let intercept in targetingResults) {
      const result = targetingResults[intercept];
      if (result.passed) {
        Qualtrics.display();
      }
    }
  });
}; 

/**
 * Register a view visit for targeting logic
 */
export const registerViewVisit = async (viewName: string): Promise<void> => {
  Qualtrics.registerViewVisit(viewName);
};

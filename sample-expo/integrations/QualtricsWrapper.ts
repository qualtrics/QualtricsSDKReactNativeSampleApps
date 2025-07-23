import Qualtrics from "react-native-qualtrics";

export interface QualtricsProjectInfo {
  brandID: string;
  projectID: string;
  interceptID: string;
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
 * Get current project info
 */
export const getProjectInfo = (): QualtricsProjectInfo | null => {
  return projectInfo;
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
        "Call setProjectInfo() with your Brand ID and Project ID before using other methods."
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

  return new Promise((resolve) => {
    console.log("Initializing Qualtrics...");

    Qualtrics.initializeProjectWithExtRefId(
      projectInfo!.brandID,
      projectInfo!.projectID,
      projectInfo!.extRefId || "",
      (initializationResults) => {
        console.log("Qualtrics initialization results:", initializationResults);
        isProjectInitialized = true;
        console.log("Qualtrics initialization done");
        resolve(initializationResults);
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
    await initialize();
  }
};

/**
 * Evaluate project and automatically display intercepts that pass targeting conditions
 */
export const evaluateAndDisplayProject = async (): Promise<void> => {
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
 * Initialize with project info in one call (convenience method)
 */
export const initializeWithProjectInfo = async (info: QualtricsProjectInfo) => {
  setProjectInfo(info);
  return initialize();
};

/**
 * Register a view visit for targeting logic
 */
export const registerViewVisit = async (viewName: string): Promise<void> => {
  await ensureProjectIsInitialized();
  Qualtrics.registerViewVisit(viewName);
};

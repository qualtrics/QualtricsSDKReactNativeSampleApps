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
    Qualtrics.initializeProjectWithExtRefId(
      projectInfo!.brandID,
      projectInfo!.projectID,
      projectInfo!.extRefId || "",
      (initializationResults) => {
        console.log("Qualtrics initialization results:", initializationResults);
        if (Object.values(initializationResults).some(result => !result.passed) || 
            Object.keys(initializationResults).length === 0) {
          reject(new Error("Qualtrics initialization failed"));
          return;
        }
        isProjectInitialized = true;
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
    try {
      await initialize();
    } catch (error) {
      console.error("Qualtrics initialization failed:", error);
      throw error;
    }
  }
};

/**
 * Evaluate and display intercept by ID
 * IMPORTANT: If a project is not initialized, this function will try to initialize it before evaluating.
 * @param interceptID - The ID of the intercept to display
 */
export const evaluateAndDisplayIntercept = async (interceptID: string) => {
  await ensureProjectIsInitialized();
  Qualtrics.evaluateIntercept(interceptID, (result) => {
    console.log("Intercept result:", result);
    if (result.passed) {
      Qualtrics.displayIntercept(interceptID).catch((error) => {
        console.error("Error displaying intercept:", error);
      });
    }
  });
};

export const registerViewVisit = (viewName: string) => {
  Qualtrics.registerViewVisit(viewName);
};
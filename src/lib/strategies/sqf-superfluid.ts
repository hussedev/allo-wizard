import { CommonOptions, defaults as commonDefaults } from "./base-strategy";

export interface SQFSuperfluid extends CommonOptions {
    sqfImports: boolean;
}

export const defaults: Required<SQFSuperfluid> = {
    baseStrategy: false,
    errors: commonDefaults.errors,
    allocationExt: true,
    allocatorsAllowlistExt: commonDefaults.allocatorsAllowlistExt,
    easGatingExt: commonDefaults.easGatingExt,
    nftGatingExt: true,
    tokenGatingExt: commonDefaults.tokenGatingExt,
    milestonesExt: commonDefaults.milestonesExt,
    recipientsExt: true,
    qfHelperLib: commonDefaults.qfHelperLib,
    qvHelperLib: commonDefaults.qvHelperLib,
    sqfImports: true,
} as const;
import { CommonOptions, defaults as commonDefaults } from "./base-strategy"

export interface DirectAllocation extends CommonOptions {
    
}

export const defaults: Required<DirectAllocation> = {
    baseStrategy: true,
    errors: true,
    allocationExt: commonDefaults.allocationExt,
    allocatorsAllowlistExt: commonDefaults.allocatorsAllowlistExt,
    easGatingExt: commonDefaults.easGatingExt,
    nftGatingExt: commonDefaults.nftGatingExt,
    tokenGatingExt: commonDefaults.tokenGatingExt,
    milestonesExt: commonDefaults.milestonesExt,
    recipientsExt: commonDefaults.recipientsExt,
    qfHelperLib: commonDefaults.qfHelperLib,
    qvHelperLib: commonDefaults.qvHelperLib,
} as const;
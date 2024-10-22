import { CommonOptions, defaults as commonDefaults } from "./base-strategy"

export interface QVSimple extends CommonOptions {
    
}

export const defaults: Required<QVSimple> = {
    baseStrategy: true,
    errors: commonDefaults.errors,
    allocationExt: commonDefaults.allocationExt,
    allocatorsAllowlistExt: true,
    easGatingExt: commonDefaults.easGatingExt,
    nftGatingExt: commonDefaults.nftGatingExt,
    tokenGatingExt: commonDefaults.tokenGatingExt,
    milestonesExt: commonDefaults.milestonesExt,
    recipientsExt: true,
    qfHelperLib: commonDefaults.qfHelperLib,
    qvHelperLib: true,
} as const;
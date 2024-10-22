import { CommonOptions, defaults as commonDefaults } from "./base-strategy"

export interface RFPSimple extends CommonOptions {
    
}

export const defaults: Required<RFPSimple> = {
    baseStrategy: true,
    errors: commonDefaults.errors,
    allocationExt: commonDefaults.allocationExt,
    allocatorsAllowlistExt: commonDefaults.allocatorsAllowlistExt,
    easGatingExt: commonDefaults.easGatingExt,
    nftGatingExt: commonDefaults.nftGatingExt,
    tokenGatingExt: commonDefaults.tokenGatingExt,
    milestonesExt: true,
    recipientsExt: true,
    qfHelperLib: commonDefaults.qfHelperLib,
    qvHelperLib: commonDefaults.qvHelperLib,
} as const;
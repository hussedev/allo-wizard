import { CommonOptions, defaults as commonDefaults } from "../base-strategy";

export interface DonationVotingOffchain extends CommonOptions {
    
}

export const defaults: Required<DonationVotingOffchain> = {
    baseStrategy: true,
    errors: commonDefaults.errors,
    allocationExt: true,
    allocatorsAllowlistExt: commonDefaults.allocatorsAllowlistExt,
    easGatingExt: commonDefaults.easGatingExt,
    nftGatingExt: commonDefaults.nftGatingExt,
    tokenGatingExt: commonDefaults.tokenGatingExt,
    milestonesExt: commonDefaults.milestonesExt,
    recipientsExt: true,
    qfHelperLib: commonDefaults.qfHelperLib,
    qvHelperLib: commonDefaults.qvHelperLib,
} as const;
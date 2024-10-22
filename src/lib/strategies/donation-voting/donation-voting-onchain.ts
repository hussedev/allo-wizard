import { CommonOptions, defaults as commonDefaults } from "../base-strategy";

export interface DonationVotingOnchain extends CommonOptions {
    
}

export const defaults: Required<DonationVotingOnchain> = {
    baseStrategy: true,
    errors: commonDefaults.errors,
    allocationExt: true,
    allocatorsAllowlistExt: commonDefaults.allocatorsAllowlistExt,
    easGatingExt: commonDefaults.easGatingExt,
    nftGatingExt: commonDefaults.nftGatingExt,
    tokenGatingExt: commonDefaults.tokenGatingExt,
    milestonesExt: commonDefaults.milestonesExt,
    recipientsExt: true,
    qfHelperLib: true,
    qvHelperLib: commonDefaults.qvHelperLib,
} as const;
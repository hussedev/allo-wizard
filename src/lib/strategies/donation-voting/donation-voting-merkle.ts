import { DonationVotingOffchain, defaults as donateDefaults } from "./donation-voting-offchain";

export interface DonationVotingMerkle extends DonationVotingOffchain {
    ozMerkleProof: boolean;
}

export const defaults: Required<DonationVotingMerkle> = {
    baseStrategy: true,
    errors: donateDefaults.errors,
    allocationExt: donateDefaults.allocationExt,
    allocatorsAllowlistExt: donateDefaults.allocatorsAllowlistExt,
    easGatingExt: donateDefaults.easGatingExt,
    nftGatingExt: donateDefaults.nftGatingExt,
    tokenGatingExt: donateDefaults.tokenGatingExt,
    milestonesExt: donateDefaults.milestonesExt,
    recipientsExt: donateDefaults.recipientsExt,
    qfHelperLib: donateDefaults.qfHelperLib,
    qvHelperLib: donateDefaults.qvHelperLib,
    ozMerkleProof: true,
} as const;
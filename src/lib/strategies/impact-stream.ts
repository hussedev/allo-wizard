import { QVSimple, defaults as qvDefaults } from "./qv-simple";

export interface QVImpactStream extends QVSimple {
    
}

export const defaults: Required<QVImpactStream> = {
    baseStrategy: true,
    errors: qvDefaults.errors,
    allocationExt: qvDefaults.allocationExt,
    allocatorsAllowlistExt: qvDefaults.allocatorsAllowlistExt,
    easGatingExt: qvDefaults.easGatingExt,
    nftGatingExt: qvDefaults.nftGatingExt,
    tokenGatingExt: qvDefaults.tokenGatingExt,
    milestonesExt: qvDefaults.milestonesExt,
    recipientsExt: qvDefaults.recipientsExt,
    qfHelperLib: qvDefaults.qfHelperLib,
    qvHelperLib: qvDefaults.qvHelperLib,
} as const;
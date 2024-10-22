export interface CommonOptions {
    baseStrategy: boolean;
    errors: boolean;
    allocationExt: boolean;
    allocatorsAllowlistExt: boolean;
    easGatingExt: boolean;
    nftGatingExt: boolean;
    tokenGatingExt: boolean;
    milestonesExt: boolean;
    recipientsExt: boolean;
    qfHelperLib: boolean;
    qvHelperLib: boolean;
}

export const defaults: Required<CommonOptions> = {
    baseStrategy: true,
    errors: false,
    allocationExt: false,
    allocatorsAllowlistExt: false,
    easGatingExt: false,
    nftGatingExt: false,
    tokenGatingExt: false,
    milestonesExt: false,
    recipientsExt: false,
    qfHelperLib: false,
    qvHelperLib: false,
} as const;
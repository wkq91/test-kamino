import * as LiquidationTokenTest from "./LiquidationTokenTest"
import * as WithdrawalCapAccumulatorAction from "./WithdrawalCapAccumulatorAction"
import * as ReserveFarmKind from "./ReserveFarmKind"
import * as ReserveStatus from "./ReserveStatus"
import * as FeeCalculation from "./FeeCalculation"
import * as AssetTier from "./AssetTier"
import * as UpdateReserveConfigValue from "./UpdateReserveConfigValue"
import * as UpdateConfigMode from "./UpdateConfigMode"
import * as UpdateLendingMarketConfigValue from "./UpdateLendingMarketConfigValue"
import * as UpdateLendingMarketMode from "./UpdateLendingMarketMode"
import * as RequiredIxType from "./RequiredIxType"

export { LastUpdate } from "./LastUpdate"
export type { LastUpdateFields, LastUpdateJSON } from "./LastUpdate"
export { ElevationGroup } from "./ElevationGroup"
export type { ElevationGroupFields, ElevationGroupJSON } from "./ElevationGroup"
export { InitObligationArgs } from "./InitObligationArgs"
export type {
  InitObligationArgsFields,
  InitObligationArgsJSON,
} from "./InitObligationArgs"
export { ObligationCollateral } from "./ObligationCollateral"
export type {
  ObligationCollateralFields,
  ObligationCollateralJSON,
} from "./ObligationCollateral"
export { ObligationLiquidity } from "./ObligationLiquidity"
export type {
  ObligationLiquidityFields,
  ObligationLiquidityJSON,
} from "./ObligationLiquidity"
export { BigFractionBytes } from "./BigFractionBytes"
export type {
  BigFractionBytesFields,
  BigFractionBytesJSON,
} from "./BigFractionBytes"
export { ReserveLiquidity } from "./ReserveLiquidity"
export type {
  ReserveLiquidityFields,
  ReserveLiquidityJSON,
} from "./ReserveLiquidity"
export { ReserveCollateral } from "./ReserveCollateral"
export type {
  ReserveCollateralFields,
  ReserveCollateralJSON,
} from "./ReserveCollateral"
export { ReserveConfig } from "./ReserveConfig"
export type { ReserveConfigFields, ReserveConfigJSON } from "./ReserveConfig"
export { WithdrawalCaps } from "./WithdrawalCaps"
export type { WithdrawalCapsFields, WithdrawalCapsJSON } from "./WithdrawalCaps"
export { ReserveFees } from "./ReserveFees"
export type { ReserveFeesFields, ReserveFeesJSON } from "./ReserveFees"
export { TokenInfo } from "./TokenInfo"
export type { TokenInfoFields, TokenInfoJSON } from "./TokenInfo"
export { PriceHeuristic } from "./PriceHeuristic"
export type { PriceHeuristicFields, PriceHeuristicJSON } from "./PriceHeuristic"
export { ScopeConfiguration } from "./ScopeConfiguration"
export type {
  ScopeConfigurationFields,
  ScopeConfigurationJSON,
} from "./ScopeConfiguration"
export { SwitchboardConfiguration } from "./SwitchboardConfiguration"
export type {
  SwitchboardConfigurationFields,
  SwitchboardConfigurationJSON,
} from "./SwitchboardConfiguration"
export { PythConfiguration } from "./PythConfiguration"
export type {
  PythConfigurationFields,
  PythConfigurationJSON,
} from "./PythConfiguration"
export { BorrowRateCurve } from "./BorrowRateCurve"
export type {
  BorrowRateCurveFields,
  BorrowRateCurveJSON,
} from "./BorrowRateCurve"
export { CurvePoint } from "./CurvePoint"
export type { CurvePointFields, CurvePointJSON } from "./CurvePoint"
export { LiquidationTokenTest }

export type LiquidationTokenTestKind =
  | LiquidationTokenTest.Sol
  | LiquidationTokenTest.Usdh
export type LiquidationTokenTestJSON =
  | LiquidationTokenTest.SolJSON
  | LiquidationTokenTest.UsdhJSON

export { WithdrawalCapAccumulatorAction }

export type WithdrawalCapAccumulatorActionKind =
  | WithdrawalCapAccumulatorAction.KeepAccumulator
  | WithdrawalCapAccumulatorAction.ResetAccumulator
export type WithdrawalCapAccumulatorActionJSON =
  | WithdrawalCapAccumulatorAction.KeepAccumulatorJSON
  | WithdrawalCapAccumulatorAction.ResetAccumulatorJSON

export { ReserveFarmKind }

export type ReserveFarmKindKind =
  | ReserveFarmKind.Collateral
  | ReserveFarmKind.Debt
export type ReserveFarmKindJSON =
  | ReserveFarmKind.CollateralJSON
  | ReserveFarmKind.DebtJSON

export { ReserveStatus }

export type ReserveStatusKind =
  | ReserveStatus.Active
  | ReserveStatus.Obsolete
  | ReserveStatus.Hidden
export type ReserveStatusJSON =
  | ReserveStatus.ActiveJSON
  | ReserveStatus.ObsoleteJSON
  | ReserveStatus.HiddenJSON

export { FeeCalculation }

/** Calculate fees exlusive or inclusive of an amount */
export type FeeCalculationKind =
  | FeeCalculation.Exclusive
  | FeeCalculation.Inclusive
export type FeeCalculationJSON =
  | FeeCalculation.ExclusiveJSON
  | FeeCalculation.InclusiveJSON

export { AssetTier }

export type AssetTierKind =
  | AssetTier.Regular
  | AssetTier.IsolatedCollateral
  | AssetTier.IsolatedDebt
export type AssetTierJSON =
  | AssetTier.RegularJSON
  | AssetTier.IsolatedCollateralJSON
  | AssetTier.IsolatedDebtJSON

export { UpdateReserveConfigValue }

export type UpdateReserveConfigValueKind =
  | UpdateReserveConfigValue.Bool
  | UpdateReserveConfigValue.U8
  | UpdateReserveConfigValue.U8Tuple
  | UpdateReserveConfigValue.U16
  | UpdateReserveConfigValue.U64
  | UpdateReserveConfigValue.Pubkey
  | UpdateReserveConfigValue.ScopeChain
  | UpdateReserveConfigValue.Name
  | UpdateReserveConfigValue.BorrowRateCurve
  | UpdateReserveConfigValue.Full
  | UpdateReserveConfigValue.WithdrawalCap
  | UpdateReserveConfigValue.ElevationGroups
export type UpdateReserveConfigValueJSON =
  | UpdateReserveConfigValue.BoolJSON
  | UpdateReserveConfigValue.U8JSON
  | UpdateReserveConfigValue.U8TupleJSON
  | UpdateReserveConfigValue.U16JSON
  | UpdateReserveConfigValue.U64JSON
  | UpdateReserveConfigValue.PubkeyJSON
  | UpdateReserveConfigValue.ScopeChainJSON
  | UpdateReserveConfigValue.NameJSON
  | UpdateReserveConfigValue.BorrowRateCurveJSON
  | UpdateReserveConfigValue.FullJSON
  | UpdateReserveConfigValue.WithdrawalCapJSON
  | UpdateReserveConfigValue.ElevationGroupsJSON

export { UpdateConfigMode }

export type UpdateConfigModeKind =
  | UpdateConfigMode.UpdateLoanToValuePct
  | UpdateConfigMode.UpdateMaxLiquidationBonusBps
  | UpdateConfigMode.UpdateLiquidationThresholdPct
  | UpdateConfigMode.UpdateProtocolLiquidationFee
  | UpdateConfigMode.UpdateProtocolTakeRate
  | UpdateConfigMode.UpdateFeesBorrowFee
  | UpdateConfigMode.UpdateFeesFlashLoanFee
  | UpdateConfigMode.UpdateFeesReferralFeeBps
  | UpdateConfigMode.UpdateDepositLimit
  | UpdateConfigMode.UpdateBorrowLimit
  | UpdateConfigMode.UpdateTokenInfoLowerHeuristic
  | UpdateConfigMode.UpdateTokenInfoUpperHeuristic
  | UpdateConfigMode.UpdateTokenInfoExpHeuristic
  | UpdateConfigMode.UpdateTokenInfoTwapDivergence
  | UpdateConfigMode.UpdateTokenInfoScopeTwap
  | UpdateConfigMode.UpdateTokenInfoScopeChain
  | UpdateConfigMode.UpdateTokenInfoName
  | UpdateConfigMode.UpdateTokenInfoPriceMaxAge
  | UpdateConfigMode.UpdateTokenInfoTwapMaxAge
  | UpdateConfigMode.UpdateScopePriceFeed
  | UpdateConfigMode.UpdatePythPrice
  | UpdateConfigMode.UpdateSwitchboardFeed
  | UpdateConfigMode.UpdateSwitchboardTwapFeed
  | UpdateConfigMode.UpdateBorrowRateCurve
  | UpdateConfigMode.UpdateEntireReserveConfig
  | UpdateConfigMode.UpdateDebtWithdrawalCap
  | UpdateConfigMode.UpdateDepositWithdrawalCap
  | UpdateConfigMode.UpdateDebtWithdrawalCapCurrentTotal
  | UpdateConfigMode.UpdateDepositWithdrawalCapCurrentTotal
  | UpdateConfigMode.UpdateBadDebtLiquidationBonusBps
  | UpdateConfigMode.UpdateMinLiquidationBonusBps
  | UpdateConfigMode.DeleveragingMarginCallPeriod
  | UpdateConfigMode.UpdateBorrowFactor
  | UpdateConfigMode.UpdateAssetTier
  | UpdateConfigMode.UpdateElevationGroup
  | UpdateConfigMode.DeleveragingThresholdSlotsPerBps
  | UpdateConfigMode.UpdateMultiplierSideBoost
  | UpdateConfigMode.UpdateMultiplierTagBoost
  | UpdateConfigMode.UpdateReserveStatus
export type UpdateConfigModeJSON =
  | UpdateConfigMode.UpdateLoanToValuePctJSON
  | UpdateConfigMode.UpdateMaxLiquidationBonusBpsJSON
  | UpdateConfigMode.UpdateLiquidationThresholdPctJSON
  | UpdateConfigMode.UpdateProtocolLiquidationFeeJSON
  | UpdateConfigMode.UpdateProtocolTakeRateJSON
  | UpdateConfigMode.UpdateFeesBorrowFeeJSON
  | UpdateConfigMode.UpdateFeesFlashLoanFeeJSON
  | UpdateConfigMode.UpdateFeesReferralFeeBpsJSON
  | UpdateConfigMode.UpdateDepositLimitJSON
  | UpdateConfigMode.UpdateBorrowLimitJSON
  | UpdateConfigMode.UpdateTokenInfoLowerHeuristicJSON
  | UpdateConfigMode.UpdateTokenInfoUpperHeuristicJSON
  | UpdateConfigMode.UpdateTokenInfoExpHeuristicJSON
  | UpdateConfigMode.UpdateTokenInfoTwapDivergenceJSON
  | UpdateConfigMode.UpdateTokenInfoScopeTwapJSON
  | UpdateConfigMode.UpdateTokenInfoScopeChainJSON
  | UpdateConfigMode.UpdateTokenInfoNameJSON
  | UpdateConfigMode.UpdateTokenInfoPriceMaxAgeJSON
  | UpdateConfigMode.UpdateTokenInfoTwapMaxAgeJSON
  | UpdateConfigMode.UpdateScopePriceFeedJSON
  | UpdateConfigMode.UpdatePythPriceJSON
  | UpdateConfigMode.UpdateSwitchboardFeedJSON
  | UpdateConfigMode.UpdateSwitchboardTwapFeedJSON
  | UpdateConfigMode.UpdateBorrowRateCurveJSON
  | UpdateConfigMode.UpdateEntireReserveConfigJSON
  | UpdateConfigMode.UpdateDebtWithdrawalCapJSON
  | UpdateConfigMode.UpdateDepositWithdrawalCapJSON
  | UpdateConfigMode.UpdateDebtWithdrawalCapCurrentTotalJSON
  | UpdateConfigMode.UpdateDepositWithdrawalCapCurrentTotalJSON
  | UpdateConfigMode.UpdateBadDebtLiquidationBonusBpsJSON
  | UpdateConfigMode.UpdateMinLiquidationBonusBpsJSON
  | UpdateConfigMode.DeleveragingMarginCallPeriodJSON
  | UpdateConfigMode.UpdateBorrowFactorJSON
  | UpdateConfigMode.UpdateAssetTierJSON
  | UpdateConfigMode.UpdateElevationGroupJSON
  | UpdateConfigMode.DeleveragingThresholdSlotsPerBpsJSON
  | UpdateConfigMode.UpdateMultiplierSideBoostJSON
  | UpdateConfigMode.UpdateMultiplierTagBoostJSON
  | UpdateConfigMode.UpdateReserveStatusJSON

export { UpdateLendingMarketConfigValue }

export type UpdateLendingMarketConfigValueKind =
  | UpdateLendingMarketConfigValue.Bool
  | UpdateLendingMarketConfigValue.U8
  | UpdateLendingMarketConfigValue.U8Array
  | UpdateLendingMarketConfigValue.U16
  | UpdateLendingMarketConfigValue.U64
  | UpdateLendingMarketConfigValue.Pubkey
  | UpdateLendingMarketConfigValue.ElevationGroup
export type UpdateLendingMarketConfigValueJSON =
  | UpdateLendingMarketConfigValue.BoolJSON
  | UpdateLendingMarketConfigValue.U8JSON
  | UpdateLendingMarketConfigValue.U8ArrayJSON
  | UpdateLendingMarketConfigValue.U16JSON
  | UpdateLendingMarketConfigValue.U64JSON
  | UpdateLendingMarketConfigValue.PubkeyJSON
  | UpdateLendingMarketConfigValue.ElevationGroupJSON

export { UpdateLendingMarketMode }

export type UpdateLendingMarketModeKind =
  | UpdateLendingMarketMode.UpdateOwner
  | UpdateLendingMarketMode.UpdateEmergencyMode
  | UpdateLendingMarketMode.UpdateLiquidationCloseFactor
  | UpdateLendingMarketMode.UpdateLiquidationMaxValue
  | UpdateLendingMarketMode.UpdateGlobalUnhealthyBorrow
  | UpdateLendingMarketMode.UpdateGlobalAllowedBorrow
  | UpdateLendingMarketMode.UpdateRiskCouncil
  | UpdateLendingMarketMode.UpdateMinFullLiquidationThreshold
  | UpdateLendingMarketMode.UpdateInsolvencyRiskLtv
  | UpdateLendingMarketMode.UpdateElevationGroup
  | UpdateLendingMarketMode.UpdateReferralFeeBps
  | UpdateLendingMarketMode.UpdateMultiplierPoints
  | UpdateLendingMarketMode.UpdatePriceRefreshTriggerToMaxAgePct
export type UpdateLendingMarketModeJSON =
  | UpdateLendingMarketMode.UpdateOwnerJSON
  | UpdateLendingMarketMode.UpdateEmergencyModeJSON
  | UpdateLendingMarketMode.UpdateLiquidationCloseFactorJSON
  | UpdateLendingMarketMode.UpdateLiquidationMaxValueJSON
  | UpdateLendingMarketMode.UpdateGlobalUnhealthyBorrowJSON
  | UpdateLendingMarketMode.UpdateGlobalAllowedBorrowJSON
  | UpdateLendingMarketMode.UpdateRiskCouncilJSON
  | UpdateLendingMarketMode.UpdateMinFullLiquidationThresholdJSON
  | UpdateLendingMarketMode.UpdateInsolvencyRiskLtvJSON
  | UpdateLendingMarketMode.UpdateElevationGroupJSON
  | UpdateLendingMarketMode.UpdateReferralFeeBpsJSON
  | UpdateLendingMarketMode.UpdateMultiplierPointsJSON
  | UpdateLendingMarketMode.UpdatePriceRefreshTriggerToMaxAgePctJSON

export { RequiredIxType }

export type RequiredIxTypeKind =
  | RequiredIxType.RefreshReserve
  | RequiredIxType.RefreshFarmsForObligationForReserve
  | RequiredIxType.RefreshObligation
export type RequiredIxTypeJSON =
  | RequiredIxType.RefreshReserveJSON
  | RequiredIxType.RefreshFarmsForObligationForReserveJSON
  | RequiredIxType.RefreshObligationJSON

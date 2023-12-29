import { PublicKey, Connection } from "@solana/web3.js"
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface LendingMarketFields {
  /** Version of lending market */
  version: BN
  /** Bump seed for derived authority address */
  bumpSeed: BN
  /** Owner authority which can add new reserves */
  lendingMarketOwner: PublicKey
  /** Temporary cache of the lending market owner, used in update_lending_market_owner */
  lendingMarketOwnerCached: PublicKey
  /**
   * Currency market prices are quoted in
   * e.g. "USD" null padded (`*b"USD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"`) or a SPL token mint pubkey
   */
  quoteCurrency: Array<number>
  /** Referral fee for the lending market, as bps out of the total protocol fee */
  referralFeeBps: number
  emergencyMode: number
  /** Padding used for alignment */
  reserved: Array<number>
  /**
   * Refresh price from oracle only if it's older than this percentage of the price max age.
   * e.g. if the max age is set to 100s and this is set to 80%, the price will be refreshed if it's older than 80s.
   * Price is always refreshed if this set to 0.
   */
  priceRefreshTriggerToMaxAgePct: number
  /** Percentage of the total borrowed value in an obligation available for liquidation */
  liquidationMaxDebtCloseFactorPct: number
  /** Minimum acceptable unhealthy LTV before max_debt_close_factor_pct becomes 100% */
  insolvencyRiskUnhealthyLtvPct: number
  /** Minimum liquidation amount threshold triggering full liquidation for an obligation */
  minFullLiquidationAmountThreshold: BN
  /** Max allowed liquidation value in one ix call */
  maxLiquidatableDebtMarketValueAtOnce: BN
  /** Global maximum unhealthy borrow value allowed for any obligation */
  globalUnhealthyBorrowValue: BN
  /** Global maximum allowed borrow value allowed for any obligation */
  globalAllowedBorrowValue: BN
  /** The address of the risk council, in charge of making parameter and risk decisions on behalf of the protocol */
  riskCouncil: PublicKey
  /** Reward points multiplier per obligation type */
  multiplierPointsTagBoost: Array<number>
  /** Elevation groups are used to group together reserves that have the same risk parameters and can bump the ltv and liquidation threshold */
  elevationGroups: Array<types.ElevationGroupFields>
  elevationGroupPadding: Array<BN>
  padding1: Array<BN>
}

export interface LendingMarketJSON {
  /** Version of lending market */
  version: string
  /** Bump seed for derived authority address */
  bumpSeed: string
  /** Owner authority which can add new reserves */
  lendingMarketOwner: string
  /** Temporary cache of the lending market owner, used in update_lending_market_owner */
  lendingMarketOwnerCached: string
  /**
   * Currency market prices are quoted in
   * e.g. "USD" null padded (`*b"USD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"`) or a SPL token mint pubkey
   */
  quoteCurrency: Array<number>
  /** Referral fee for the lending market, as bps out of the total protocol fee */
  referralFeeBps: number
  emergencyMode: number
  /** Padding used for alignment */
  reserved: Array<number>
  /**
   * Refresh price from oracle only if it's older than this percentage of the price max age.
   * e.g. if the max age is set to 100s and this is set to 80%, the price will be refreshed if it's older than 80s.
   * Price is always refreshed if this set to 0.
   */
  priceRefreshTriggerToMaxAgePct: number
  /** Percentage of the total borrowed value in an obligation available for liquidation */
  liquidationMaxDebtCloseFactorPct: number
  /** Minimum acceptable unhealthy LTV before max_debt_close_factor_pct becomes 100% */
  insolvencyRiskUnhealthyLtvPct: number
  /** Minimum liquidation amount threshold triggering full liquidation for an obligation */
  minFullLiquidationAmountThreshold: string
  /** Max allowed liquidation value in one ix call */
  maxLiquidatableDebtMarketValueAtOnce: string
  /** Global maximum unhealthy borrow value allowed for any obligation */
  globalUnhealthyBorrowValue: string
  /** Global maximum allowed borrow value allowed for any obligation */
  globalAllowedBorrowValue: string
  /** The address of the risk council, in charge of making parameter and risk decisions on behalf of the protocol */
  riskCouncil: string
  /** Reward points multiplier per obligation type */
  multiplierPointsTagBoost: Array<number>
  /** Elevation groups are used to group together reserves that have the same risk parameters and can bump the ltv and liquidation threshold */
  elevationGroups: Array<types.ElevationGroupJSON>
  elevationGroupPadding: Array<string>
  padding1: Array<string>
}

export class LendingMarket {
  /** Version of lending market */
  readonly version: BN
  /** Bump seed for derived authority address */
  readonly bumpSeed: BN
  /** Owner authority which can add new reserves */
  readonly lendingMarketOwner: PublicKey
  /** Temporary cache of the lending market owner, used in update_lending_market_owner */
  readonly lendingMarketOwnerCached: PublicKey
  /**
   * Currency market prices are quoted in
   * e.g. "USD" null padded (`*b"USD\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"`) or a SPL token mint pubkey
   */
  readonly quoteCurrency: Array<number>
  /** Referral fee for the lending market, as bps out of the total protocol fee */
  readonly referralFeeBps: number
  readonly emergencyMode: number
  /** Padding used for alignment */
  readonly reserved: Array<number>
  /**
   * Refresh price from oracle only if it's older than this percentage of the price max age.
   * e.g. if the max age is set to 100s and this is set to 80%, the price will be refreshed if it's older than 80s.
   * Price is always refreshed if this set to 0.
   */
  readonly priceRefreshTriggerToMaxAgePct: number
  /** Percentage of the total borrowed value in an obligation available for liquidation */
  readonly liquidationMaxDebtCloseFactorPct: number
  /** Minimum acceptable unhealthy LTV before max_debt_close_factor_pct becomes 100% */
  readonly insolvencyRiskUnhealthyLtvPct: number
  /** Minimum liquidation amount threshold triggering full liquidation for an obligation */
  readonly minFullLiquidationAmountThreshold: BN
  /** Max allowed liquidation value in one ix call */
  readonly maxLiquidatableDebtMarketValueAtOnce: BN
  /** Global maximum unhealthy borrow value allowed for any obligation */
  readonly globalUnhealthyBorrowValue: BN
  /** Global maximum allowed borrow value allowed for any obligation */
  readonly globalAllowedBorrowValue: BN
  /** The address of the risk council, in charge of making parameter and risk decisions on behalf of the protocol */
  readonly riskCouncil: PublicKey
  /** Reward points multiplier per obligation type */
  readonly multiplierPointsTagBoost: Array<number>
  /** Elevation groups are used to group together reserves that have the same risk parameters and can bump the ltv and liquidation threshold */
  readonly elevationGroups: Array<types.ElevationGroup>
  readonly elevationGroupPadding: Array<BN>
  readonly padding1: Array<BN>

  static readonly discriminator = Buffer.from([
    246, 114, 50, 98, 72, 157, 28, 120,
  ])

  static readonly layout = borsh.struct([
    borsh.u64("version"),
    borsh.u64("bumpSeed"),
    borsh.publicKey("lendingMarketOwner"),
    borsh.publicKey("lendingMarketOwnerCached"),
    borsh.array(borsh.u8(), 32, "quoteCurrency"),
    borsh.u16("referralFeeBps"),
    borsh.u8("emergencyMode"),
    borsh.array(borsh.u8(), 2, "reserved"),
    borsh.u8("priceRefreshTriggerToMaxAgePct"),
    borsh.u8("liquidationMaxDebtCloseFactorPct"),
    borsh.u8("insolvencyRiskUnhealthyLtvPct"),
    borsh.u64("minFullLiquidationAmountThreshold"),
    borsh.u64("maxLiquidatableDebtMarketValueAtOnce"),
    borsh.u64("globalUnhealthyBorrowValue"),
    borsh.u64("globalAllowedBorrowValue"),
    borsh.publicKey("riskCouncil"),
    borsh.array(borsh.u8(), 8, "multiplierPointsTagBoost"),
    borsh.array(types.ElevationGroup.layout(), 32, "elevationGroups"),
    borsh.array(borsh.u64(), 90, "elevationGroupPadding"),
    borsh.array(borsh.u64(), 180, "padding1"),
  ])

  constructor(fields: LendingMarketFields) {
    this.version = fields.version
    this.bumpSeed = fields.bumpSeed
    this.lendingMarketOwner = fields.lendingMarketOwner
    this.lendingMarketOwnerCached = fields.lendingMarketOwnerCached
    this.quoteCurrency = fields.quoteCurrency
    this.referralFeeBps = fields.referralFeeBps
    this.emergencyMode = fields.emergencyMode
    this.reserved = fields.reserved
    this.priceRefreshTriggerToMaxAgePct = fields.priceRefreshTriggerToMaxAgePct
    this.liquidationMaxDebtCloseFactorPct =
      fields.liquidationMaxDebtCloseFactorPct
    this.insolvencyRiskUnhealthyLtvPct = fields.insolvencyRiskUnhealthyLtvPct
    this.minFullLiquidationAmountThreshold =
      fields.minFullLiquidationAmountThreshold
    this.maxLiquidatableDebtMarketValueAtOnce =
      fields.maxLiquidatableDebtMarketValueAtOnce
    this.globalUnhealthyBorrowValue = fields.globalUnhealthyBorrowValue
    this.globalAllowedBorrowValue = fields.globalAllowedBorrowValue
    this.riskCouncil = fields.riskCouncil
    this.multiplierPointsTagBoost = fields.multiplierPointsTagBoost
    this.elevationGroups = fields.elevationGroups.map(
      (item) => new types.ElevationGroup({ ...item })
    )
    this.elevationGroupPadding = fields.elevationGroupPadding
    this.padding1 = fields.padding1
  }

  static async fetch(
    c: Connection,
    address: PublicKey,
    programId: PublicKey = PROGRAM_ID
  ): Promise<LendingMarket | null> {
    const info = await c.getAccountInfo(address)

    if (info === null) {
      return null
    }
    if (!info.owner.equals(programId)) {
      throw new Error("account doesn't belong to this program")
    }

    return this.decode(info.data)
  }

  static async fetchMultiple(
    c: Connection,
    addresses: PublicKey[],
    programId: PublicKey = PROGRAM_ID
  ): Promise<Array<LendingMarket | null>> {
    const infos = await c.getMultipleAccountsInfo(addresses)

    return infos.map((info) => {
      if (info === null) {
        return null
      }
      if (!info.owner.equals(programId)) {
        throw new Error("account doesn't belong to this program")
      }

      return this.decode(info.data)
    })
  }

  static decode(data: Buffer): LendingMarket {
    if (!data.slice(0, 8).equals(LendingMarket.discriminator)) {
      throw new Error("invalid account discriminator")
    }

    const dec = LendingMarket.layout.decode(data.slice(8))

    return new LendingMarket({
      version: dec.version,
      bumpSeed: dec.bumpSeed,
      lendingMarketOwner: dec.lendingMarketOwner,
      lendingMarketOwnerCached: dec.lendingMarketOwnerCached,
      quoteCurrency: dec.quoteCurrency,
      referralFeeBps: dec.referralFeeBps,
      emergencyMode: dec.emergencyMode,
      reserved: dec.reserved,
      priceRefreshTriggerToMaxAgePct: dec.priceRefreshTriggerToMaxAgePct,
      liquidationMaxDebtCloseFactorPct: dec.liquidationMaxDebtCloseFactorPct,
      insolvencyRiskUnhealthyLtvPct: dec.insolvencyRiskUnhealthyLtvPct,
      minFullLiquidationAmountThreshold: dec.minFullLiquidationAmountThreshold,
      maxLiquidatableDebtMarketValueAtOnce:
        dec.maxLiquidatableDebtMarketValueAtOnce,
      globalUnhealthyBorrowValue: dec.globalUnhealthyBorrowValue,
      globalAllowedBorrowValue: dec.globalAllowedBorrowValue,
      riskCouncil: dec.riskCouncil,
      multiplierPointsTagBoost: dec.multiplierPointsTagBoost,
      elevationGroups: dec.elevationGroups.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) => types.ElevationGroup.fromDecoded(item)
      ),
      elevationGroupPadding: dec.elevationGroupPadding,
      padding1: dec.padding1,
    })
  }

  toJSON(): LendingMarketJSON {
    return {
      version: this.version.toString(),
      bumpSeed: this.bumpSeed.toString(),
      lendingMarketOwner: this.lendingMarketOwner.toString(),
      lendingMarketOwnerCached: this.lendingMarketOwnerCached.toString(),
      quoteCurrency: this.quoteCurrency,
      referralFeeBps: this.referralFeeBps,
      emergencyMode: this.emergencyMode,
      reserved: this.reserved,
      priceRefreshTriggerToMaxAgePct: this.priceRefreshTriggerToMaxAgePct,
      liquidationMaxDebtCloseFactorPct: this.liquidationMaxDebtCloseFactorPct,
      insolvencyRiskUnhealthyLtvPct: this.insolvencyRiskUnhealthyLtvPct,
      minFullLiquidationAmountThreshold:
        this.minFullLiquidationAmountThreshold.toString(),
      maxLiquidatableDebtMarketValueAtOnce:
        this.maxLiquidatableDebtMarketValueAtOnce.toString(),
      globalUnhealthyBorrowValue: this.globalUnhealthyBorrowValue.toString(),
      globalAllowedBorrowValue: this.globalAllowedBorrowValue.toString(),
      riskCouncil: this.riskCouncil.toString(),
      multiplierPointsTagBoost: this.multiplierPointsTagBoost,
      elevationGroups: this.elevationGroups.map((item) => item.toJSON()),
      elevationGroupPadding: this.elevationGroupPadding.map((item) =>
        item.toString()
      ),
      padding1: this.padding1.map((item) => item.toString()),
    }
  }

  static fromJSON(obj: LendingMarketJSON): LendingMarket {
    return new LendingMarket({
      version: new BN(obj.version),
      bumpSeed: new BN(obj.bumpSeed),
      lendingMarketOwner: new PublicKey(obj.lendingMarketOwner),
      lendingMarketOwnerCached: new PublicKey(obj.lendingMarketOwnerCached),
      quoteCurrency: obj.quoteCurrency,
      referralFeeBps: obj.referralFeeBps,
      emergencyMode: obj.emergencyMode,
      reserved: obj.reserved,
      priceRefreshTriggerToMaxAgePct: obj.priceRefreshTriggerToMaxAgePct,
      liquidationMaxDebtCloseFactorPct: obj.liquidationMaxDebtCloseFactorPct,
      insolvencyRiskUnhealthyLtvPct: obj.insolvencyRiskUnhealthyLtvPct,
      minFullLiquidationAmountThreshold: new BN(
        obj.minFullLiquidationAmountThreshold
      ),
      maxLiquidatableDebtMarketValueAtOnce: new BN(
        obj.maxLiquidatableDebtMarketValueAtOnce
      ),
      globalUnhealthyBorrowValue: new BN(obj.globalUnhealthyBorrowValue),
      globalAllowedBorrowValue: new BN(obj.globalAllowedBorrowValue),
      riskCouncil: new PublicKey(obj.riskCouncil),
      multiplierPointsTagBoost: obj.multiplierPointsTagBoost,
      elevationGroups: obj.elevationGroups.map((item) =>
        types.ElevationGroup.fromJSON(item)
      ),
      elevationGroupPadding: obj.elevationGroupPadding.map(
        (item) => new BN(item)
      ),
      padding1: obj.padding1.map((item) => new BN(item)),
    })
  }
}

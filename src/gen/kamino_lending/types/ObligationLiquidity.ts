import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface ObligationLiquidityFields {
  /** Reserve liquidity is borrowed from */
  borrowReserve: PublicKey
  /** Borrow rate used for calculating interest (big scaled fraction) */
  cumulativeBorrowRateBsf: types.BigFractionBytesFields
  padding: BN
  /** Amount of liquidity borrowed plus interest (scaled fraction) */
  borrowedAmountSf: BN
  /** Liquidity market value in quote currency (scaled fraction) */
  marketValueSf: BN
  /** Risk adjusted liquidity market value in quote currency - DEBUG ONLY - use market_value instead */
  borrowFactorAdjustedMarketValueSf: BN
  padding2: Array<BN>
}

export interface ObligationLiquidityJSON {
  /** Reserve liquidity is borrowed from */
  borrowReserve: string
  /** Borrow rate used for calculating interest (big scaled fraction) */
  cumulativeBorrowRateBsf: types.BigFractionBytesJSON
  padding: string
  /** Amount of liquidity borrowed plus interest (scaled fraction) */
  borrowedAmountSf: string
  /** Liquidity market value in quote currency (scaled fraction) */
  marketValueSf: string
  /** Risk adjusted liquidity market value in quote currency - DEBUG ONLY - use market_value instead */
  borrowFactorAdjustedMarketValueSf: string
  padding2: Array<string>
}

/** Obligation liquidity state */
export class ObligationLiquidity {
  /** Reserve liquidity is borrowed from */
  readonly borrowReserve: PublicKey
  /** Borrow rate used for calculating interest (big scaled fraction) */
  readonly cumulativeBorrowRateBsf: types.BigFractionBytes
  readonly padding: BN
  /** Amount of liquidity borrowed plus interest (scaled fraction) */
  readonly borrowedAmountSf: BN
  /** Liquidity market value in quote currency (scaled fraction) */
  readonly marketValueSf: BN
  /** Risk adjusted liquidity market value in quote currency - DEBUG ONLY - use market_value instead */
  readonly borrowFactorAdjustedMarketValueSf: BN
  readonly padding2: Array<BN>

  constructor(fields: ObligationLiquidityFields) {
    this.borrowReserve = fields.borrowReserve
    this.cumulativeBorrowRateBsf = new types.BigFractionBytes({
      ...fields.cumulativeBorrowRateBsf,
    })
    this.padding = fields.padding
    this.borrowedAmountSf = fields.borrowedAmountSf
    this.marketValueSf = fields.marketValueSf
    this.borrowFactorAdjustedMarketValueSf =
      fields.borrowFactorAdjustedMarketValueSf
    this.padding2 = fields.padding2
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.publicKey("borrowReserve"),
        types.BigFractionBytes.layout("cumulativeBorrowRateBsf"),
        borsh.u64("padding"),
        borsh.u128("borrowedAmountSf"),
        borsh.u128("marketValueSf"),
        borsh.u128("borrowFactorAdjustedMarketValueSf"),
        borsh.array(borsh.u64(), 8, "padding2"),
      ],
      property
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new ObligationLiquidity({
      borrowReserve: obj.borrowReserve,
      cumulativeBorrowRateBsf: types.BigFractionBytes.fromDecoded(
        obj.cumulativeBorrowRateBsf
      ),
      padding: obj.padding,
      borrowedAmountSf: obj.borrowedAmountSf,
      marketValueSf: obj.marketValueSf,
      borrowFactorAdjustedMarketValueSf: obj.borrowFactorAdjustedMarketValueSf,
      padding2: obj.padding2,
    })
  }

  static toEncodable(fields: ObligationLiquidityFields) {
    return {
      borrowReserve: fields.borrowReserve,
      cumulativeBorrowRateBsf: types.BigFractionBytes.toEncodable(
        fields.cumulativeBorrowRateBsf
      ),
      padding: fields.padding,
      borrowedAmountSf: fields.borrowedAmountSf,
      marketValueSf: fields.marketValueSf,
      borrowFactorAdjustedMarketValueSf:
        fields.borrowFactorAdjustedMarketValueSf,
      padding2: fields.padding2,
    }
  }

  toJSON(): ObligationLiquidityJSON {
    return {
      borrowReserve: this.borrowReserve.toString(),
      cumulativeBorrowRateBsf: this.cumulativeBorrowRateBsf.toJSON(),
      padding: this.padding.toString(),
      borrowedAmountSf: this.borrowedAmountSf.toString(),
      marketValueSf: this.marketValueSf.toString(),
      borrowFactorAdjustedMarketValueSf:
        this.borrowFactorAdjustedMarketValueSf.toString(),
      padding2: this.padding2.map((item) => item.toString()),
    }
  }

  static fromJSON(obj: ObligationLiquidityJSON): ObligationLiquidity {
    return new ObligationLiquidity({
      borrowReserve: new PublicKey(obj.borrowReserve),
      cumulativeBorrowRateBsf: types.BigFractionBytes.fromJSON(
        obj.cumulativeBorrowRateBsf
      ),
      padding: new BN(obj.padding),
      borrowedAmountSf: new BN(obj.borrowedAmountSf),
      marketValueSf: new BN(obj.marketValueSf),
      borrowFactorAdjustedMarketValueSf: new BN(
        obj.borrowFactorAdjustedMarketValueSf
      ),
      padding2: obj.padding2.map((item) => new BN(item)),
    })
  }

  toEncodable() {
    return ObligationLiquidity.toEncodable(this)
  }
}

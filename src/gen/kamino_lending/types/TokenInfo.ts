import { PublicKey } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh"

export interface TokenInfoFields {
  /** UTF-8 encoded name of the token (null-terminated) */
  name: Array<number>
  /** Heuristics limits of acceptable price */
  heuristic: types.PriceHeuristicFields
  /** Max divergence between twap and price in bps */
  maxTwapDivergenceBps: BN
  maxAgePriceSeconds: BN
  maxAgeTwapSeconds: BN
  /** Scope price configuration */
  scopeConfiguration: types.ScopeConfigurationFields
  /** Switchboard configuration */
  switchboardConfiguration: types.SwitchboardConfigurationFields
  /** Pyth configuration */
  pythConfiguration: types.PythConfigurationFields
  padding: Array<BN>
}

export interface TokenInfoJSON {
  /** UTF-8 encoded name of the token (null-terminated) */
  name: Array<number>
  /** Heuristics limits of acceptable price */
  heuristic: types.PriceHeuristicJSON
  /** Max divergence between twap and price in bps */
  maxTwapDivergenceBps: string
  maxAgePriceSeconds: string
  maxAgeTwapSeconds: string
  /** Scope price configuration */
  scopeConfiguration: types.ScopeConfigurationJSON
  /** Switchboard configuration */
  switchboardConfiguration: types.SwitchboardConfigurationJSON
  /** Pyth configuration */
  pythConfiguration: types.PythConfigurationJSON
  padding: Array<string>
}

export class TokenInfo {
  /** UTF-8 encoded name of the token (null-terminated) */
  readonly name: Array<number>
  /** Heuristics limits of acceptable price */
  readonly heuristic: types.PriceHeuristic
  /** Max divergence between twap and price in bps */
  readonly maxTwapDivergenceBps: BN
  readonly maxAgePriceSeconds: BN
  readonly maxAgeTwapSeconds: BN
  /** Scope price configuration */
  readonly scopeConfiguration: types.ScopeConfiguration
  /** Switchboard configuration */
  readonly switchboardConfiguration: types.SwitchboardConfiguration
  /** Pyth configuration */
  readonly pythConfiguration: types.PythConfiguration
  readonly padding: Array<BN>

  constructor(fields: TokenInfoFields) {
    this.name = fields.name
    this.heuristic = new types.PriceHeuristic({ ...fields.heuristic })
    this.maxTwapDivergenceBps = fields.maxTwapDivergenceBps
    this.maxAgePriceSeconds = fields.maxAgePriceSeconds
    this.maxAgeTwapSeconds = fields.maxAgeTwapSeconds
    this.scopeConfiguration = new types.ScopeConfiguration({
      ...fields.scopeConfiguration,
    })
    this.switchboardConfiguration = new types.SwitchboardConfiguration({
      ...fields.switchboardConfiguration,
    })
    this.pythConfiguration = new types.PythConfiguration({
      ...fields.pythConfiguration,
    })
    this.padding = fields.padding
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.array(borsh.u8(), 32, "name"),
        types.PriceHeuristic.layout("heuristic"),
        borsh.u64("maxTwapDivergenceBps"),
        borsh.u64("maxAgePriceSeconds"),
        borsh.u64("maxAgeTwapSeconds"),
        types.ScopeConfiguration.layout("scopeConfiguration"),
        types.SwitchboardConfiguration.layout("switchboardConfiguration"),
        types.PythConfiguration.layout("pythConfiguration"),
        borsh.array(borsh.u64(), 20, "padding"),
      ],
      property
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new TokenInfo({
      name: obj.name,
      heuristic: types.PriceHeuristic.fromDecoded(obj.heuristic),
      maxTwapDivergenceBps: obj.maxTwapDivergenceBps,
      maxAgePriceSeconds: obj.maxAgePriceSeconds,
      maxAgeTwapSeconds: obj.maxAgeTwapSeconds,
      scopeConfiguration: types.ScopeConfiguration.fromDecoded(
        obj.scopeConfiguration
      ),
      switchboardConfiguration: types.SwitchboardConfiguration.fromDecoded(
        obj.switchboardConfiguration
      ),
      pythConfiguration: types.PythConfiguration.fromDecoded(
        obj.pythConfiguration
      ),
      padding: obj.padding,
    })
  }

  static toEncodable(fields: TokenInfoFields) {
    return {
      name: fields.name,
      heuristic: types.PriceHeuristic.toEncodable(fields.heuristic),
      maxTwapDivergenceBps: fields.maxTwapDivergenceBps,
      maxAgePriceSeconds: fields.maxAgePriceSeconds,
      maxAgeTwapSeconds: fields.maxAgeTwapSeconds,
      scopeConfiguration: types.ScopeConfiguration.toEncodable(
        fields.scopeConfiguration
      ),
      switchboardConfiguration: types.SwitchboardConfiguration.toEncodable(
        fields.switchboardConfiguration
      ),
      pythConfiguration: types.PythConfiguration.toEncodable(
        fields.pythConfiguration
      ),
      padding: fields.padding,
    }
  }

  toJSON(): TokenInfoJSON {
    return {
      name: this.name,
      heuristic: this.heuristic.toJSON(),
      maxTwapDivergenceBps: this.maxTwapDivergenceBps.toString(),
      maxAgePriceSeconds: this.maxAgePriceSeconds.toString(),
      maxAgeTwapSeconds: this.maxAgeTwapSeconds.toString(),
      scopeConfiguration: this.scopeConfiguration.toJSON(),
      switchboardConfiguration: this.switchboardConfiguration.toJSON(),
      pythConfiguration: this.pythConfiguration.toJSON(),
      padding: this.padding.map((item) => item.toString()),
    }
  }

  static fromJSON(obj: TokenInfoJSON): TokenInfo {
    return new TokenInfo({
      name: obj.name,
      heuristic: types.PriceHeuristic.fromJSON(obj.heuristic),
      maxTwapDivergenceBps: new BN(obj.maxTwapDivergenceBps),
      maxAgePriceSeconds: new BN(obj.maxAgePriceSeconds),
      maxAgeTwapSeconds: new BN(obj.maxAgeTwapSeconds),
      scopeConfiguration: types.ScopeConfiguration.fromJSON(
        obj.scopeConfiguration
      ),
      switchboardConfiguration: types.SwitchboardConfiguration.fromJSON(
        obj.switchboardConfiguration
      ),
      pythConfiguration: types.PythConfiguration.fromJSON(
        obj.pythConfiguration
      ),
      padding: obj.padding.map((item) => new BN(item)),
    })
  }

  toEncodable() {
    return TokenInfo.toEncodable(this)
  }
}

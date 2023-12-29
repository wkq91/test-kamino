import { TransactionInstruction, PublicKey, AccountMeta } from "@solana/web3.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import BN from "bn.js" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as borsh from "@coral-xyz/borsh" // eslint-disable-line @typescript-eslint/no-unused-vars
import * as types from "../types" // eslint-disable-line @typescript-eslint/no-unused-vars
import { PROGRAM_ID } from "../programId"

export interface DepositReserveLiquidityArgs {
  liquidityAmount: BN
}

export interface DepositReserveLiquidityAccounts {
  owner: PublicKey
  reserve: PublicKey
  lendingMarket: PublicKey
  lendingMarketAuthority: PublicKey
  reserveLiquiditySupply: PublicKey
  reserveCollateralMint: PublicKey
  userSourceLiquidity: PublicKey
  userDestinationCollateral: PublicKey
  tokenProgram: PublicKey
}

export const layout = borsh.struct([borsh.u64("liquidityAmount")])

export function depositReserveLiquidity(
  args: DepositReserveLiquidityArgs,
  accounts: DepositReserveLiquidityAccounts,
  programId: PublicKey = PROGRAM_ID
) {
  const keys: Array<AccountMeta> = [
    { pubkey: accounts.owner, isSigner: true, isWritable: false },
    { pubkey: accounts.reserve, isSigner: false, isWritable: true },
    { pubkey: accounts.lendingMarket, isSigner: false, isWritable: false },
    {
      pubkey: accounts.lendingMarketAuthority,
      isSigner: false,
      isWritable: false,
    },
    {
      pubkey: accounts.reserveLiquiditySupply,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: accounts.reserveCollateralMint,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.userSourceLiquidity, isSigner: false, isWritable: true },
    {
      pubkey: accounts.userDestinationCollateral,
      isSigner: false,
      isWritable: true,
    },
    { pubkey: accounts.tokenProgram, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([169, 201, 30, 126, 6, 205, 102, 68])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      liquidityAmount: args.liquidityAmount,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId, data })
  return ix
}

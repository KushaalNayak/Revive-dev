
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model AIAnalysis
 * 
 */
export type AIAnalysis = $Result.DefaultSelection<Prisma.$AIAnalysisPayload>
/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model SupportTicket
 * 
 */
export type SupportTicket = $Result.DefaultSelection<Prisma.$SupportTicketPayload>
/**
 * Model SavedProject
 * 
 */
export type SavedProject = $Result.DefaultSelection<Prisma.$SavedProjectPayload>
/**
 * Model SavedGlobalRepo
 * 
 */
export type SavedGlobalRepo = $Result.DefaultSelection<Prisma.$SavedGlobalRepoPayload>
/**
 * Model Revival
 * 
 */
export type Revival = $Result.DefaultSelection<Prisma.$RevivalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectStatus: {
  LOOKING_FOR_HELP: 'LOOKING_FOR_HELP',
  IN_PROGRESS: 'IN_PROGRESS',
  REVIVED: 'REVIVED',
  ARCHIVED: 'ARCHIVED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const CompletionStage: {
  IDEA: 'IDEA',
  EARLY_PROTOTYPE: 'EARLY_PROTOTYPE',
  HALF_DONE: 'HALF_DONE',
  NEARLY_COMPLETE: 'NEARLY_COMPLETE'
};

export type CompletionStage = (typeof CompletionStage)[keyof typeof CompletionStage]


export const AbandonmentReason: {
  NO_TIME: 'NO_TIME',
  SOLO_LIMIT: 'SOLO_LIMIT',
  LOST_INTEREST: 'LOST_INTEREST',
  NEED_SKILL: 'NEED_SKILL',
  OTHER: 'OTHER',
  ARCHIVED: 'ARCHIVED',
  DEPRECATED: 'DEPRECATED'
};

export type AbandonmentReason = (typeof AbandonmentReason)[keyof typeof AbandonmentReason]


export const RevivalMode: {
  OPEN_SOURCE: 'OPEN_SOURCE',
  COLLABORATIVE: 'COLLABORATIVE',
  INDEPENDENT: 'INDEPENDENT'
};

export type RevivalMode = (typeof RevivalMode)[keyof typeof RevivalMode]


export const HelpType: {
  FRONTEND: 'FRONTEND',
  BACKEND: 'BACKEND',
  DEVOPS: 'DEVOPS',
  DOCS: 'DOCS',
  MAINTAINER: 'MAINTAINER'
};

export type HelpType = (typeof HelpType)[keyof typeof HelpType]


export const DifficultyLevel: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel]


export const RequestType: {
  ADOPT: 'ADOPT',
  CONTRIBUTE: 'CONTRIBUTE'
};

export type RequestType = (typeof RequestType)[keyof typeof RequestType]


export const RequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const TicketStatus: {
  OPEN: 'OPEN',
  SENT_TO_OWNER: 'SENT_TO_OWNER',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type CompletionStage = $Enums.CompletionStage

export const CompletionStage: typeof $Enums.CompletionStage

export type AbandonmentReason = $Enums.AbandonmentReason

export const AbandonmentReason: typeof $Enums.AbandonmentReason

export type RevivalMode = $Enums.RevivalMode

export const RevivalMode: typeof $Enums.RevivalMode

export type HelpType = $Enums.HelpType

export const HelpType: typeof $Enums.HelpType

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

export type RequestType = $Enums.RequestType

export const RequestType: typeof $Enums.RequestType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.aIAnalysis`: Exposes CRUD operations for the **AIAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIAnalyses
    * const aIAnalyses = await prisma.aIAnalysis.findMany()
    * ```
    */
  get aIAnalysis(): Prisma.AIAnalysisDelegate<ExtArgs>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs>;

  /**
   * `prisma.supportTicket`: Exposes CRUD operations for the **SupportTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupportTickets
    * const supportTickets = await prisma.supportTicket.findMany()
    * ```
    */
  get supportTicket(): Prisma.SupportTicketDelegate<ExtArgs>;

  /**
   * `prisma.savedProject`: Exposes CRUD operations for the **SavedProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedProjects
    * const savedProjects = await prisma.savedProject.findMany()
    * ```
    */
  get savedProject(): Prisma.SavedProjectDelegate<ExtArgs>;

  /**
   * `prisma.savedGlobalRepo`: Exposes CRUD operations for the **SavedGlobalRepo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedGlobalRepos
    * const savedGlobalRepos = await prisma.savedGlobalRepo.findMany()
    * ```
    */
  get savedGlobalRepo(): Prisma.SavedGlobalRepoDelegate<ExtArgs>;

  /**
   * `prisma.revival`: Exposes CRUD operations for the **Revival** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Revivals
    * const revivals = await prisma.revival.findMany()
    * ```
    */
  get revival(): Prisma.RevivalDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Project: 'Project',
    AIAnalysis: 'AIAnalysis',
    Request: 'Request',
    SupportTicket: 'SupportTicket',
    SavedProject: 'SavedProject',
    SavedGlobalRepo: 'SavedGlobalRepo',
    Revival: 'Revival'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "project" | "aIAnalysis" | "request" | "supportTicket" | "savedProject" | "savedGlobalRepo" | "revival"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      AIAnalysis: {
        payload: Prisma.$AIAnalysisPayload<ExtArgs>
        fields: Prisma.AIAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          findFirst: {
            args: Prisma.AIAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          findMany: {
            args: Prisma.AIAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>[]
          }
          create: {
            args: Prisma.AIAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          createMany: {
            args: Prisma.AIAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>[]
          }
          delete: {
            args: Prisma.AIAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          update: {
            args: Prisma.AIAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.AIAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AIAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIAnalysisPayload>
          }
          aggregate: {
            args: Prisma.AIAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIAnalysis>
          }
          groupBy: {
            args: Prisma.AIAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<AIAnalysisCountAggregateOutputType> | number
          }
        }
      }
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      SupportTicket: {
        payload: Prisma.$SupportTicketPayload<ExtArgs>
        fields: Prisma.SupportTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findFirst: {
            args: Prisma.SupportTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          findMany: {
            args: Prisma.SupportTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          create: {
            args: Prisma.SupportTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          createMany: {
            args: Prisma.SupportTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>[]
          }
          delete: {
            args: Prisma.SupportTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          update: {
            args: Prisma.SupportTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          deleteMany: {
            args: Prisma.SupportTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupportTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportTicketPayload>
          }
          aggregate: {
            args: Prisma.SupportTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupportTicket>
          }
          groupBy: {
            args: Prisma.SupportTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportTicketCountArgs<ExtArgs>
            result: $Utils.Optional<SupportTicketCountAggregateOutputType> | number
          }
        }
      }
      SavedProject: {
        payload: Prisma.$SavedProjectPayload<ExtArgs>
        fields: Prisma.SavedProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload>
          }
          findFirst: {
            args: Prisma.SavedProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload>
          }
          findMany: {
            args: Prisma.SavedProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload>[]
          }
          create: {
            args: Prisma.SavedProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload>
          }
          createMany: {
            args: Prisma.SavedProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload>[]
          }
          delete: {
            args: Prisma.SavedProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload>
          }
          update: {
            args: Prisma.SavedProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload>
          }
          deleteMany: {
            args: Prisma.SavedProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedProjectPayload>
          }
          aggregate: {
            args: Prisma.SavedProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedProject>
          }
          groupBy: {
            args: Prisma.SavedProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedProjectCountArgs<ExtArgs>
            result: $Utils.Optional<SavedProjectCountAggregateOutputType> | number
          }
        }
      }
      SavedGlobalRepo: {
        payload: Prisma.$SavedGlobalRepoPayload<ExtArgs>
        fields: Prisma.SavedGlobalRepoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedGlobalRepoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedGlobalRepoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload>
          }
          findFirst: {
            args: Prisma.SavedGlobalRepoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedGlobalRepoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload>
          }
          findMany: {
            args: Prisma.SavedGlobalRepoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload>[]
          }
          create: {
            args: Prisma.SavedGlobalRepoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload>
          }
          createMany: {
            args: Prisma.SavedGlobalRepoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedGlobalRepoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload>[]
          }
          delete: {
            args: Prisma.SavedGlobalRepoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload>
          }
          update: {
            args: Prisma.SavedGlobalRepoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload>
          }
          deleteMany: {
            args: Prisma.SavedGlobalRepoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedGlobalRepoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedGlobalRepoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedGlobalRepoPayload>
          }
          aggregate: {
            args: Prisma.SavedGlobalRepoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedGlobalRepo>
          }
          groupBy: {
            args: Prisma.SavedGlobalRepoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedGlobalRepoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedGlobalRepoCountArgs<ExtArgs>
            result: $Utils.Optional<SavedGlobalRepoCountAggregateOutputType> | number
          }
        }
      }
      Revival: {
        payload: Prisma.$RevivalPayload<ExtArgs>
        fields: Prisma.RevivalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevivalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevivalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload>
          }
          findFirst: {
            args: Prisma.RevivalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevivalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload>
          }
          findMany: {
            args: Prisma.RevivalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload>[]
          }
          create: {
            args: Prisma.RevivalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload>
          }
          createMany: {
            args: Prisma.RevivalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevivalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload>[]
          }
          delete: {
            args: Prisma.RevivalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload>
          }
          update: {
            args: Prisma.RevivalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload>
          }
          deleteMany: {
            args: Prisma.RevivalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevivalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RevivalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevivalPayload>
          }
          aggregate: {
            args: Prisma.RevivalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevival>
          }
          groupBy: {
            args: Prisma.RevivalGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevivalGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevivalCountArgs<ExtArgs>
            result: $Utils.Optional<RevivalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    projectsAdopted: number
    projectsOwned: number
    requests: number
    savedProjects: number
    sessions: number
    tickets: number
    revivals: number
    savedGlobalRepos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    projectsAdopted?: boolean | UserCountOutputTypeCountProjectsAdoptedArgs
    projectsOwned?: boolean | UserCountOutputTypeCountProjectsOwnedArgs
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    savedProjects?: boolean | UserCountOutputTypeCountSavedProjectsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
    revivals?: boolean | UserCountOutputTypeCountRevivalsArgs
    savedGlobalRepos?: boolean | UserCountOutputTypeCountSavedGlobalReposArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsAdoptedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRevivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevivalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedGlobalReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedGlobalRepoWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    requests: number
    savedIn: number
    supportTickets: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | ProjectCountOutputTypeCountRequestsArgs
    savedIn?: boolean | ProjectCountOutputTypeCountSavedInArgs
    supportTickets?: boolean | ProjectCountOutputTypeCountSupportTicketsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSavedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProjectWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSupportTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    username: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    username: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    projectsAdopted?: boolean | User$projectsAdoptedArgs<ExtArgs>
    projectsOwned?: boolean | User$projectsOwnedArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    savedProjects?: boolean | User$savedProjectsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    revivals?: boolean | User$revivalsArgs<ExtArgs>
    savedGlobalRepos?: boolean | User$savedGlobalReposArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    projectsAdopted?: boolean | User$projectsAdoptedArgs<ExtArgs>
    projectsOwned?: boolean | User$projectsOwnedArgs<ExtArgs>
    requests?: boolean | User$requestsArgs<ExtArgs>
    savedProjects?: boolean | User$savedProjectsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    revivals?: boolean | User$revivalsArgs<ExtArgs>
    savedGlobalRepos?: boolean | User$savedGlobalReposArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      projectsAdopted: Prisma.$ProjectPayload<ExtArgs>[]
      projectsOwned: Prisma.$ProjectPayload<ExtArgs>[]
      requests: Prisma.$RequestPayload<ExtArgs>[]
      savedProjects: Prisma.$SavedProjectPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      tickets: Prisma.$SupportTicketPayload<ExtArgs>[]
      revivals: Prisma.$RevivalPayload<ExtArgs>[]
      savedGlobalRepos: Prisma.$SavedGlobalRepoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      username: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany"> | Null>
    projectsAdopted<T extends User$projectsAdoptedArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsAdoptedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    projectsOwned<T extends User$projectsOwnedArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsOwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany"> | Null>
    savedProjects<T extends User$savedProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany"> | Null>
    revivals<T extends User$revivalsArgs<ExtArgs> = {}>(args?: Subset<T, User$revivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "findMany"> | Null>
    savedGlobalRepos<T extends User$savedGlobalReposArgs<ExtArgs> = {}>(args?: Subset<T, User$savedGlobalReposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.projectsAdopted
   */
  export type User$projectsAdoptedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.projectsOwned
   */
  export type User$projectsOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.savedProjects
   */
  export type User$savedProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    where?: SavedProjectWhereInput
    orderBy?: SavedProjectOrderByWithRelationInput | SavedProjectOrderByWithRelationInput[]
    cursor?: SavedProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedProjectScalarFieldEnum | SavedProjectScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    cursor?: SupportTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * User.revivals
   */
  export type User$revivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    where?: RevivalWhereInput
    orderBy?: RevivalOrderByWithRelationInput | RevivalOrderByWithRelationInput[]
    cursor?: RevivalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevivalScalarFieldEnum | RevivalScalarFieldEnum[]
  }

  /**
   * User.savedGlobalRepos
   */
  export type User$savedGlobalReposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    where?: SavedGlobalRepoWhereInput
    orderBy?: SavedGlobalRepoOrderByWithRelationInput | SavedGlobalRepoOrderByWithRelationInput[]
    cursor?: SavedGlobalRepoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedGlobalRepoScalarFieldEnum | SavedGlobalRepoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    id: number
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    id?: true
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    id: string
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    id?: boolean
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `id`
     * const verificationTokenWithIdOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly id: FieldRef<"VerificationToken", 'String'>
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    healthScore: number | null
    stars: number | null
  }

  export type ProjectSumAggregateOutputType = {
    healthScore: number | null
    stars: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    repoUrl: string | null
    repoFullName: string | null
    slug: string | null
    title: string | null
    shortDescription: string | null
    status: $Enums.ProjectStatus | null
    completionStage: $Enums.CompletionStage | null
    abandonmentReason: $Enums.AbandonmentReason | null
    lastRepoActivityAt: Date | null
    handoffWhat: string | null
    handoffCompleted: string | null
    handoffPending: string | null
    handoffSetup: string | null
    handoffKnownIssues: string | null
    handoffNotes: string | null
    isPriority: boolean | null
    priorityExpiresAt: Date | null
    adoptedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    healthScore: number | null
    language: string | null
    lastCommitDate: Date | null
    stars: number | null
    revivalMode: $Enums.RevivalMode | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    repoUrl: string | null
    repoFullName: string | null
    slug: string | null
    title: string | null
    shortDescription: string | null
    status: $Enums.ProjectStatus | null
    completionStage: $Enums.CompletionStage | null
    abandonmentReason: $Enums.AbandonmentReason | null
    lastRepoActivityAt: Date | null
    handoffWhat: string | null
    handoffCompleted: string | null
    handoffPending: string | null
    handoffSetup: string | null
    handoffKnownIssues: string | null
    handoffNotes: string | null
    isPriority: boolean | null
    priorityExpiresAt: Date | null
    adoptedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
    healthScore: number | null
    language: string | null
    lastCommitDate: Date | null
    stars: number | null
    revivalMode: $Enums.RevivalMode | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    ownerId: number
    repoUrl: number
    repoFullName: number
    slug: number
    title: number
    shortDescription: number
    status: number
    completionStage: number
    abandonmentReason: number
    helpNeeded: number
    tags: number
    lastRepoActivityAt: number
    handoffWhat: number
    handoffCompleted: number
    handoffPending: number
    handoffSetup: number
    handoffKnownIssues: number
    handoffNotes: number
    isPriority: number
    priorityExpiresAt: number
    adoptedById: number
    createdAt: number
    updatedAt: number
    healthScore: number
    language: number
    lastCommitDate: number
    stars: number
    revivalMode: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    healthScore?: true
    stars?: true
  }

  export type ProjectSumAggregateInputType = {
    healthScore?: true
    stars?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    ownerId?: true
    repoUrl?: true
    repoFullName?: true
    slug?: true
    title?: true
    shortDescription?: true
    status?: true
    completionStage?: true
    abandonmentReason?: true
    lastRepoActivityAt?: true
    handoffWhat?: true
    handoffCompleted?: true
    handoffPending?: true
    handoffSetup?: true
    handoffKnownIssues?: true
    handoffNotes?: true
    isPriority?: true
    priorityExpiresAt?: true
    adoptedById?: true
    createdAt?: true
    updatedAt?: true
    healthScore?: true
    language?: true
    lastCommitDate?: true
    stars?: true
    revivalMode?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    ownerId?: true
    repoUrl?: true
    repoFullName?: true
    slug?: true
    title?: true
    shortDescription?: true
    status?: true
    completionStage?: true
    abandonmentReason?: true
    lastRepoActivityAt?: true
    handoffWhat?: true
    handoffCompleted?: true
    handoffPending?: true
    handoffSetup?: true
    handoffKnownIssues?: true
    handoffNotes?: true
    isPriority?: true
    priorityExpiresAt?: true
    adoptedById?: true
    createdAt?: true
    updatedAt?: true
    healthScore?: true
    language?: true
    lastCommitDate?: true
    stars?: true
    revivalMode?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    ownerId?: true
    repoUrl?: true
    repoFullName?: true
    slug?: true
    title?: true
    shortDescription?: true
    status?: true
    completionStage?: true
    abandonmentReason?: true
    helpNeeded?: true
    tags?: true
    lastRepoActivityAt?: true
    handoffWhat?: true
    handoffCompleted?: true
    handoffPending?: true
    handoffSetup?: true
    handoffKnownIssues?: true
    handoffNotes?: true
    isPriority?: true
    priorityExpiresAt?: true
    adoptedById?: true
    createdAt?: true
    updatedAt?: true
    healthScore?: true
    language?: true
    lastCommitDate?: true
    stars?: true
    revivalMode?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded: $Enums.HelpType[]
    tags: string[]
    lastRepoActivityAt: Date | null
    handoffWhat: string | null
    handoffCompleted: string | null
    handoffPending: string | null
    handoffSetup: string | null
    handoffKnownIssues: string | null
    handoffNotes: string | null
    isPriority: boolean
    priorityExpiresAt: Date | null
    adoptedById: string | null
    createdAt: Date
    updatedAt: Date
    healthScore: number
    language: string | null
    lastCommitDate: Date | null
    stars: number
    revivalMode: $Enums.RevivalMode
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    repoUrl?: boolean
    repoFullName?: boolean
    slug?: boolean
    title?: boolean
    shortDescription?: boolean
    status?: boolean
    completionStage?: boolean
    abandonmentReason?: boolean
    helpNeeded?: boolean
    tags?: boolean
    lastRepoActivityAt?: boolean
    handoffWhat?: boolean
    handoffCompleted?: boolean
    handoffPending?: boolean
    handoffSetup?: boolean
    handoffKnownIssues?: boolean
    handoffNotes?: boolean
    isPriority?: boolean
    priorityExpiresAt?: boolean
    adoptedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    healthScore?: boolean
    language?: boolean
    lastCommitDate?: boolean
    stars?: boolean
    revivalMode?: boolean
    analysis?: boolean | Project$analysisArgs<ExtArgs>
    adoptedBy?: boolean | Project$adoptedByArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | Project$requestsArgs<ExtArgs>
    savedIn?: boolean | Project$savedInArgs<ExtArgs>
    supportTickets?: boolean | Project$supportTicketsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    repoUrl?: boolean
    repoFullName?: boolean
    slug?: boolean
    title?: boolean
    shortDescription?: boolean
    status?: boolean
    completionStage?: boolean
    abandonmentReason?: boolean
    helpNeeded?: boolean
    tags?: boolean
    lastRepoActivityAt?: boolean
    handoffWhat?: boolean
    handoffCompleted?: boolean
    handoffPending?: boolean
    handoffSetup?: boolean
    handoffKnownIssues?: boolean
    handoffNotes?: boolean
    isPriority?: boolean
    priorityExpiresAt?: boolean
    adoptedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    healthScore?: boolean
    language?: boolean
    lastCommitDate?: boolean
    stars?: boolean
    revivalMode?: boolean
    adoptedBy?: boolean | Project$adoptedByArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    ownerId?: boolean
    repoUrl?: boolean
    repoFullName?: boolean
    slug?: boolean
    title?: boolean
    shortDescription?: boolean
    status?: boolean
    completionStage?: boolean
    abandonmentReason?: boolean
    helpNeeded?: boolean
    tags?: boolean
    lastRepoActivityAt?: boolean
    handoffWhat?: boolean
    handoffCompleted?: boolean
    handoffPending?: boolean
    handoffSetup?: boolean
    handoffKnownIssues?: boolean
    handoffNotes?: boolean
    isPriority?: boolean
    priorityExpiresAt?: boolean
    adoptedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    healthScore?: boolean
    language?: boolean
    lastCommitDate?: boolean
    stars?: boolean
    revivalMode?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysis?: boolean | Project$analysisArgs<ExtArgs>
    adoptedBy?: boolean | Project$adoptedByArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
    requests?: boolean | Project$requestsArgs<ExtArgs>
    savedIn?: boolean | Project$savedInArgs<ExtArgs>
    supportTickets?: boolean | Project$supportTicketsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adoptedBy?: boolean | Project$adoptedByArgs<ExtArgs>
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      analysis: Prisma.$AIAnalysisPayload<ExtArgs> | null
      adoptedBy: Prisma.$UserPayload<ExtArgs> | null
      owner: Prisma.$UserPayload<ExtArgs>
      requests: Prisma.$RequestPayload<ExtArgs>[]
      savedIn: Prisma.$SavedProjectPayload<ExtArgs>[]
      supportTickets: Prisma.$SupportTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      repoUrl: string
      repoFullName: string
      slug: string
      title: string
      shortDescription: string
      status: $Enums.ProjectStatus
      completionStage: $Enums.CompletionStage
      abandonmentReason: $Enums.AbandonmentReason
      helpNeeded: $Enums.HelpType[]
      tags: string[]
      lastRepoActivityAt: Date | null
      handoffWhat: string | null
      handoffCompleted: string | null
      handoffPending: string | null
      handoffSetup: string | null
      handoffKnownIssues: string | null
      handoffNotes: string | null
      isPriority: boolean
      priorityExpiresAt: Date | null
      adoptedById: string | null
      createdAt: Date
      updatedAt: Date
      healthScore: number
      language: string | null
      lastCommitDate: Date | null
      stars: number
      revivalMode: $Enums.RevivalMode
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analysis<T extends Project$analysisArgs<ExtArgs> = {}>(args?: Subset<T, Project$analysisArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    adoptedBy<T extends Project$adoptedByArgs<ExtArgs> = {}>(args?: Subset<T, Project$adoptedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    requests<T extends Project$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Project$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany"> | Null>
    savedIn<T extends Project$savedInArgs<ExtArgs> = {}>(args?: Subset<T, Project$savedInArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "findMany"> | Null>
    supportTickets<T extends Project$supportTicketsArgs<ExtArgs> = {}>(args?: Subset<T, Project$supportTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly ownerId: FieldRef<"Project", 'String'>
    readonly repoUrl: FieldRef<"Project", 'String'>
    readonly repoFullName: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly shortDescription: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly completionStage: FieldRef<"Project", 'CompletionStage'>
    readonly abandonmentReason: FieldRef<"Project", 'AbandonmentReason'>
    readonly helpNeeded: FieldRef<"Project", 'HelpType[]'>
    readonly tags: FieldRef<"Project", 'String[]'>
    readonly lastRepoActivityAt: FieldRef<"Project", 'DateTime'>
    readonly handoffWhat: FieldRef<"Project", 'String'>
    readonly handoffCompleted: FieldRef<"Project", 'String'>
    readonly handoffPending: FieldRef<"Project", 'String'>
    readonly handoffSetup: FieldRef<"Project", 'String'>
    readonly handoffKnownIssues: FieldRef<"Project", 'String'>
    readonly handoffNotes: FieldRef<"Project", 'String'>
    readonly isPriority: FieldRef<"Project", 'Boolean'>
    readonly priorityExpiresAt: FieldRef<"Project", 'DateTime'>
    readonly adoptedById: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly healthScore: FieldRef<"Project", 'Int'>
    readonly language: FieldRef<"Project", 'String'>
    readonly lastCommitDate: FieldRef<"Project", 'DateTime'>
    readonly stars: FieldRef<"Project", 'Int'>
    readonly revivalMode: FieldRef<"Project", 'RevivalMode'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.analysis
   */
  export type Project$analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    where?: AIAnalysisWhereInput
  }

  /**
   * Project.adoptedBy
   */
  export type Project$adoptedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Project.requests
   */
  export type Project$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Project.savedIn
   */
  export type Project$savedInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    where?: SavedProjectWhereInput
    orderBy?: SavedProjectOrderByWithRelationInput | SavedProjectOrderByWithRelationInput[]
    cursor?: SavedProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedProjectScalarFieldEnum | SavedProjectScalarFieldEnum[]
  }

  /**
   * Project.supportTickets
   */
  export type Project$supportTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    cursor?: SupportTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model AIAnalysis
   */

  export type AggregateAIAnalysis = {
    _count: AIAnalysisCountAggregateOutputType | null
    _min: AIAnalysisMinAggregateOutputType | null
    _max: AIAnalysisMaxAggregateOutputType | null
  }

  export type AIAnalysisMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    summary: string | null
    difficultyLevel: $Enums.DifficultyLevel | null
    structureExplanation: string | null
    stoppageReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIAnalysisMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    summary: string | null
    difficultyLevel: $Enums.DifficultyLevel | null
    structureExplanation: string | null
    stoppageReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIAnalysisCountAggregateOutputType = {
    id: number
    projectId: number
    summary: number
    problemsDetected: number
    revivalRoadmap: number
    difficultyLevel: number
    structureExplanation: number
    stoppageReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIAnalysisMinAggregateInputType = {
    id?: true
    projectId?: true
    summary?: true
    difficultyLevel?: true
    structureExplanation?: true
    stoppageReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIAnalysisMaxAggregateInputType = {
    id?: true
    projectId?: true
    summary?: true
    difficultyLevel?: true
    structureExplanation?: true
    stoppageReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIAnalysisCountAggregateInputType = {
    id?: true
    projectId?: true
    summary?: true
    problemsDetected?: true
    revivalRoadmap?: true
    difficultyLevel?: true
    structureExplanation?: true
    stoppageReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIAnalysis to aggregate.
     */
    where?: AIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIAnalyses to fetch.
     */
    orderBy?: AIAnalysisOrderByWithRelationInput | AIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIAnalyses
    **/
    _count?: true | AIAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIAnalysisMaxAggregateInputType
  }

  export type GetAIAnalysisAggregateType<T extends AIAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateAIAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIAnalysis[P]>
      : GetScalarType<T[P], AggregateAIAnalysis[P]>
  }




  export type AIAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIAnalysisWhereInput
    orderBy?: AIAnalysisOrderByWithAggregationInput | AIAnalysisOrderByWithAggregationInput[]
    by: AIAnalysisScalarFieldEnum[] | AIAnalysisScalarFieldEnum
    having?: AIAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIAnalysisCountAggregateInputType | true
    _min?: AIAnalysisMinAggregateInputType
    _max?: AIAnalysisMaxAggregateInputType
  }

  export type AIAnalysisGroupByOutputType = {
    id: string
    projectId: string
    summary: string
    problemsDetected: string[]
    revivalRoadmap: string[]
    difficultyLevel: $Enums.DifficultyLevel
    structureExplanation: string | null
    stoppageReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: AIAnalysisCountAggregateOutputType | null
    _min: AIAnalysisMinAggregateOutputType | null
    _max: AIAnalysisMaxAggregateOutputType | null
  }

  type GetAIAnalysisGroupByPayload<T extends AIAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AIAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type AIAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    summary?: boolean
    problemsDetected?: boolean
    revivalRoadmap?: boolean
    difficultyLevel?: boolean
    structureExplanation?: boolean
    stoppageReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIAnalysis"]>

  export type AIAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    summary?: boolean
    problemsDetected?: boolean
    revivalRoadmap?: boolean
    difficultyLevel?: boolean
    structureExplanation?: boolean
    stoppageReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIAnalysis"]>

  export type AIAnalysisSelectScalar = {
    id?: boolean
    projectId?: boolean
    summary?: boolean
    problemsDetected?: boolean
    revivalRoadmap?: boolean
    difficultyLevel?: boolean
    structureExplanation?: boolean
    stoppageReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type AIAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $AIAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIAnalysis"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      summary: string
      problemsDetected: string[]
      revivalRoadmap: string[]
      difficultyLevel: $Enums.DifficultyLevel
      structureExplanation: string | null
      stoppageReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIAnalysis"]>
    composites: {}
  }

  type AIAnalysisGetPayload<S extends boolean | null | undefined | AIAnalysisDefaultArgs> = $Result.GetResult<Prisma.$AIAnalysisPayload, S>

  type AIAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AIAnalysisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AIAnalysisCountAggregateInputType | true
    }

  export interface AIAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIAnalysis'], meta: { name: 'AIAnalysis' } }
    /**
     * Find zero or one AIAnalysis that matches the filter.
     * @param {AIAnalysisFindUniqueArgs} args - Arguments to find a AIAnalysis
     * @example
     * // Get one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIAnalysisFindUniqueArgs>(args: SelectSubset<T, AIAnalysisFindUniqueArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AIAnalysis that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AIAnalysisFindUniqueOrThrowArgs} args - Arguments to find a AIAnalysis
     * @example
     * // Get one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, AIAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AIAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisFindFirstArgs} args - Arguments to find a AIAnalysis
     * @example
     * // Get one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIAnalysisFindFirstArgs>(args?: SelectSubset<T, AIAnalysisFindFirstArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AIAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisFindFirstOrThrowArgs} args - Arguments to find a AIAnalysis
     * @example
     * // Get one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, AIAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AIAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIAnalyses
     * const aIAnalyses = await prisma.aIAnalysis.findMany()
     * 
     * // Get first 10 AIAnalyses
     * const aIAnalyses = await prisma.aIAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIAnalysisWithIdOnly = await prisma.aIAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIAnalysisFindManyArgs>(args?: SelectSubset<T, AIAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AIAnalysis.
     * @param {AIAnalysisCreateArgs} args - Arguments to create a AIAnalysis.
     * @example
     * // Create one AIAnalysis
     * const AIAnalysis = await prisma.aIAnalysis.create({
     *   data: {
     *     // ... data to create a AIAnalysis
     *   }
     * })
     * 
     */
    create<T extends AIAnalysisCreateArgs>(args: SelectSubset<T, AIAnalysisCreateArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AIAnalyses.
     * @param {AIAnalysisCreateManyArgs} args - Arguments to create many AIAnalyses.
     * @example
     * // Create many AIAnalyses
     * const aIAnalysis = await prisma.aIAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIAnalysisCreateManyArgs>(args?: SelectSubset<T, AIAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIAnalyses and returns the data saved in the database.
     * @param {AIAnalysisCreateManyAndReturnArgs} args - Arguments to create many AIAnalyses.
     * @example
     * // Create many AIAnalyses
     * const aIAnalysis = await prisma.aIAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIAnalyses and only return the `id`
     * const aIAnalysisWithIdOnly = await prisma.aIAnalysis.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, AIAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AIAnalysis.
     * @param {AIAnalysisDeleteArgs} args - Arguments to delete one AIAnalysis.
     * @example
     * // Delete one AIAnalysis
     * const AIAnalysis = await prisma.aIAnalysis.delete({
     *   where: {
     *     // ... filter to delete one AIAnalysis
     *   }
     * })
     * 
     */
    delete<T extends AIAnalysisDeleteArgs>(args: SelectSubset<T, AIAnalysisDeleteArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AIAnalysis.
     * @param {AIAnalysisUpdateArgs} args - Arguments to update one AIAnalysis.
     * @example
     * // Update one AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIAnalysisUpdateArgs>(args: SelectSubset<T, AIAnalysisUpdateArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AIAnalyses.
     * @param {AIAnalysisDeleteManyArgs} args - Arguments to filter AIAnalyses to delete.
     * @example
     * // Delete a few AIAnalyses
     * const { count } = await prisma.aIAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIAnalysisDeleteManyArgs>(args?: SelectSubset<T, AIAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIAnalyses
     * const aIAnalysis = await prisma.aIAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIAnalysisUpdateManyArgs>(args: SelectSubset<T, AIAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AIAnalysis.
     * @param {AIAnalysisUpsertArgs} args - Arguments to update or create a AIAnalysis.
     * @example
     * // Update or create a AIAnalysis
     * const aIAnalysis = await prisma.aIAnalysis.upsert({
     *   create: {
     *     // ... data to create a AIAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends AIAnalysisUpsertArgs>(args: SelectSubset<T, AIAnalysisUpsertArgs<ExtArgs>>): Prisma__AIAnalysisClient<$Result.GetResult<Prisma.$AIAnalysisPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AIAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisCountArgs} args - Arguments to filter AIAnalyses to count.
     * @example
     * // Count the number of AIAnalyses
     * const count = await prisma.aIAnalysis.count({
     *   where: {
     *     // ... the filter for the AIAnalyses we want to count
     *   }
     * })
    **/
    count<T extends AIAnalysisCountArgs>(
      args?: Subset<T, AIAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIAnalysisAggregateArgs>(args: Subset<T, AIAnalysisAggregateArgs>): Prisma.PrismaPromise<GetAIAnalysisAggregateType<T>>

    /**
     * Group by AIAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AIAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIAnalysis model
   */
  readonly fields: AIAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIAnalysis model
   */ 
  interface AIAnalysisFieldRefs {
    readonly id: FieldRef<"AIAnalysis", 'String'>
    readonly projectId: FieldRef<"AIAnalysis", 'String'>
    readonly summary: FieldRef<"AIAnalysis", 'String'>
    readonly problemsDetected: FieldRef<"AIAnalysis", 'String[]'>
    readonly revivalRoadmap: FieldRef<"AIAnalysis", 'String[]'>
    readonly difficultyLevel: FieldRef<"AIAnalysis", 'DifficultyLevel'>
    readonly structureExplanation: FieldRef<"AIAnalysis", 'String'>
    readonly stoppageReason: FieldRef<"AIAnalysis", 'String'>
    readonly createdAt: FieldRef<"AIAnalysis", 'DateTime'>
    readonly updatedAt: FieldRef<"AIAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIAnalysis findUnique
   */
  export type AIAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalysis to fetch.
     */
    where: AIAnalysisWhereUniqueInput
  }

  /**
   * AIAnalysis findUniqueOrThrow
   */
  export type AIAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalysis to fetch.
     */
    where: AIAnalysisWhereUniqueInput
  }

  /**
   * AIAnalysis findFirst
   */
  export type AIAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalysis to fetch.
     */
    where?: AIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIAnalyses to fetch.
     */
    orderBy?: AIAnalysisOrderByWithRelationInput | AIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIAnalyses.
     */
    cursor?: AIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIAnalyses.
     */
    distinct?: AIAnalysisScalarFieldEnum | AIAnalysisScalarFieldEnum[]
  }

  /**
   * AIAnalysis findFirstOrThrow
   */
  export type AIAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalysis to fetch.
     */
    where?: AIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIAnalyses to fetch.
     */
    orderBy?: AIAnalysisOrderByWithRelationInput | AIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIAnalyses.
     */
    cursor?: AIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIAnalyses.
     */
    distinct?: AIAnalysisScalarFieldEnum | AIAnalysisScalarFieldEnum[]
  }

  /**
   * AIAnalysis findMany
   */
  export type AIAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which AIAnalyses to fetch.
     */
    where?: AIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIAnalyses to fetch.
     */
    orderBy?: AIAnalysisOrderByWithRelationInput | AIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIAnalyses.
     */
    cursor?: AIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIAnalyses.
     */
    skip?: number
    distinct?: AIAnalysisScalarFieldEnum | AIAnalysisScalarFieldEnum[]
  }

  /**
   * AIAnalysis create
   */
  export type AIAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a AIAnalysis.
     */
    data: XOR<AIAnalysisCreateInput, AIAnalysisUncheckedCreateInput>
  }

  /**
   * AIAnalysis createMany
   */
  export type AIAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIAnalyses.
     */
    data: AIAnalysisCreateManyInput | AIAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIAnalysis createManyAndReturn
   */
  export type AIAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AIAnalyses.
     */
    data: AIAnalysisCreateManyInput | AIAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIAnalysis update
   */
  export type AIAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a AIAnalysis.
     */
    data: XOR<AIAnalysisUpdateInput, AIAnalysisUncheckedUpdateInput>
    /**
     * Choose, which AIAnalysis to update.
     */
    where: AIAnalysisWhereUniqueInput
  }

  /**
   * AIAnalysis updateMany
   */
  export type AIAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIAnalyses.
     */
    data: XOR<AIAnalysisUpdateManyMutationInput, AIAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which AIAnalyses to update
     */
    where?: AIAnalysisWhereInput
  }

  /**
   * AIAnalysis upsert
   */
  export type AIAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the AIAnalysis to update in case it exists.
     */
    where: AIAnalysisWhereUniqueInput
    /**
     * In case the AIAnalysis found by the `where` argument doesn't exist, create a new AIAnalysis with this data.
     */
    create: XOR<AIAnalysisCreateInput, AIAnalysisUncheckedCreateInput>
    /**
     * In case the AIAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIAnalysisUpdateInput, AIAnalysisUncheckedUpdateInput>
  }

  /**
   * AIAnalysis delete
   */
  export type AIAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
    /**
     * Filter which AIAnalysis to delete.
     */
    where: AIAnalysisWhereUniqueInput
  }

  /**
   * AIAnalysis deleteMany
   */
  export type AIAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIAnalyses to delete
     */
    where?: AIAnalysisWhereInput
  }

  /**
   * AIAnalysis without action
   */
  export type AIAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIAnalysis
     */
    select?: AIAnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    requesterId: string | null
    type: $Enums.RequestType | null
    message: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    revivalMode: $Enums.RevivalMode | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    requesterId: string | null
    type: $Enums.RequestType | null
    message: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    revivalMode: $Enums.RevivalMode | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    projectId: number
    requesterId: number
    type: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    revivalMode: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    projectId?: true
    requesterId?: true
    type?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    revivalMode?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    projectId?: true
    requesterId?: true
    type?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    revivalMode?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    projectId?: true
    requesterId?: true
    type?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    revivalMode?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    projectId: string
    requesterId: string
    type: $Enums.RequestType
    message: string
    status: $Enums.RequestStatus
    createdAt: Date
    updatedAt: Date
    revivalMode: $Enums.RevivalMode | null
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    requesterId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revivalMode?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    requesterId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revivalMode?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    projectId?: boolean
    requesterId?: boolean
    type?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    revivalMode?: boolean
  }

  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      requesterId: string
      type: $Enums.RequestType
      message: string
      status: $Enums.RequestStatus
      createdAt: Date
      updatedAt: Date
      revivalMode: $Enums.RevivalMode | null
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */ 
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly projectId: FieldRef<"Request", 'String'>
    readonly requesterId: FieldRef<"Request", 'String'>
    readonly type: FieldRef<"Request", 'RequestType'>
    readonly message: FieldRef<"Request", 'String'>
    readonly status: FieldRef<"Request", 'RequestStatus'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
    readonly updatedAt: FieldRef<"Request", 'DateTime'>
    readonly revivalMode: FieldRef<"Request", 'RevivalMode'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model SupportTicket
   */

  export type AggregateSupportTicket = {
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  export type SupportTicketMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    requestId: string | null
    requesterId: string | null
    message: string | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportTicketMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    requestId: string | null
    requesterId: string | null
    message: string | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportTicketCountAggregateOutputType = {
    id: number
    projectId: number
    requestId: number
    requesterId: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportTicketMinAggregateInputType = {
    id?: true
    projectId?: true
    requestId?: true
    requesterId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportTicketMaxAggregateInputType = {
    id?: true
    projectId?: true
    requestId?: true
    requesterId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportTicketCountAggregateInputType = {
    id?: true
    projectId?: true
    requestId?: true
    requesterId?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTicket to aggregate.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupportTickets
    **/
    _count?: true | SupportTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportTicketMaxAggregateInputType
  }

  export type GetSupportTicketAggregateType<T extends SupportTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateSupportTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupportTicket[P]>
      : GetScalarType<T[P], AggregateSupportTicket[P]>
  }




  export type SupportTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportTicketWhereInput
    orderBy?: SupportTicketOrderByWithAggregationInput | SupportTicketOrderByWithAggregationInput[]
    by: SupportTicketScalarFieldEnum[] | SupportTicketScalarFieldEnum
    having?: SupportTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportTicketCountAggregateInputType | true
    _min?: SupportTicketMinAggregateInputType
    _max?: SupportTicketMaxAggregateInputType
  }

  export type SupportTicketGroupByOutputType = {
    id: string
    projectId: string
    requestId: string
    requesterId: string
    message: string
    status: $Enums.TicketStatus
    createdAt: Date
    updatedAt: Date
    _count: SupportTicketCountAggregateOutputType | null
    _min: SupportTicketMinAggregateOutputType | null
    _max: SupportTicketMaxAggregateOutputType | null
  }

  type GetSupportTicketGroupByPayload<T extends SupportTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
            : GetScalarType<T[P], SupportTicketGroupByOutputType[P]>
        }
      >
    >


  export type SupportTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    requestId?: boolean
    requesterId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    requestId?: boolean
    requesterId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supportTicket"]>

  export type SupportTicketSelectScalar = {
    id?: boolean
    projectId?: boolean
    requestId?: boolean
    requesterId?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupportTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SupportTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    requester?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SupportTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupportTicket"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      requester: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      requestId: string
      requesterId: string
      message: string
      status: $Enums.TicketStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supportTicket"]>
    composites: {}
  }

  type SupportTicketGetPayload<S extends boolean | null | undefined | SupportTicketDefaultArgs> = $Result.GetResult<Prisma.$SupportTicketPayload, S>

  type SupportTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupportTicketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupportTicketCountAggregateInputType | true
    }

  export interface SupportTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupportTicket'], meta: { name: 'SupportTicket' } }
    /**
     * Find zero or one SupportTicket that matches the filter.
     * @param {SupportTicketFindUniqueArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportTicketFindUniqueArgs>(args: SelectSubset<T, SupportTicketFindUniqueArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupportTicket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupportTicketFindUniqueOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupportTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportTicketFindFirstArgs>(args?: SelectSubset<T, SupportTicketFindFirstArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupportTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindFirstOrThrowArgs} args - Arguments to find a SupportTicket
     * @example
     * // Get one SupportTicket
     * const supportTicket = await prisma.supportTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupportTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany()
     * 
     * // Get first 10 SupportTickets
     * const supportTickets = await prisma.supportTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportTicketFindManyArgs>(args?: SelectSubset<T, SupportTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupportTicket.
     * @param {SupportTicketCreateArgs} args - Arguments to create a SupportTicket.
     * @example
     * // Create one SupportTicket
     * const SupportTicket = await prisma.supportTicket.create({
     *   data: {
     *     // ... data to create a SupportTicket
     *   }
     * })
     * 
     */
    create<T extends SupportTicketCreateArgs>(args: SelectSubset<T, SupportTicketCreateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupportTickets.
     * @param {SupportTicketCreateManyArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportTicketCreateManyArgs>(args?: SelectSubset<T, SupportTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupportTickets and returns the data saved in the database.
     * @param {SupportTicketCreateManyAndReturnArgs} args - Arguments to create many SupportTickets.
     * @example
     * // Create many SupportTickets
     * const supportTicket = await prisma.supportTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupportTickets and only return the `id`
     * const supportTicketWithIdOnly = await prisma.supportTicket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupportTicket.
     * @param {SupportTicketDeleteArgs} args - Arguments to delete one SupportTicket.
     * @example
     * // Delete one SupportTicket
     * const SupportTicket = await prisma.supportTicket.delete({
     *   where: {
     *     // ... filter to delete one SupportTicket
     *   }
     * })
     * 
     */
    delete<T extends SupportTicketDeleteArgs>(args: SelectSubset<T, SupportTicketDeleteArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupportTicket.
     * @param {SupportTicketUpdateArgs} args - Arguments to update one SupportTicket.
     * @example
     * // Update one SupportTicket
     * const supportTicket = await prisma.supportTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportTicketUpdateArgs>(args: SelectSubset<T, SupportTicketUpdateArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupportTickets.
     * @param {SupportTicketDeleteManyArgs} args - Arguments to filter SupportTickets to delete.
     * @example
     * // Delete a few SupportTickets
     * const { count } = await prisma.supportTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportTicketDeleteManyArgs>(args?: SelectSubset<T, SupportTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupportTickets
     * const supportTicket = await prisma.supportTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportTicketUpdateManyArgs>(args: SelectSubset<T, SupportTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupportTicket.
     * @param {SupportTicketUpsertArgs} args - Arguments to update or create a SupportTicket.
     * @example
     * // Update or create a SupportTicket
     * const supportTicket = await prisma.supportTicket.upsert({
     *   create: {
     *     // ... data to create a SupportTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupportTicket we want to update
     *   }
     * })
     */
    upsert<T extends SupportTicketUpsertArgs>(args: SelectSubset<T, SupportTicketUpsertArgs<ExtArgs>>): Prisma__SupportTicketClient<$Result.GetResult<Prisma.$SupportTicketPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupportTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketCountArgs} args - Arguments to filter SupportTickets to count.
     * @example
     * // Count the number of SupportTickets
     * const count = await prisma.supportTicket.count({
     *   where: {
     *     // ... the filter for the SupportTickets we want to count
     *   }
     * })
    **/
    count<T extends SupportTicketCountArgs>(
      args?: Subset<T, SupportTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportTicketAggregateArgs>(args: Subset<T, SupportTicketAggregateArgs>): Prisma.PrismaPromise<GetSupportTicketAggregateType<T>>

    /**
     * Group by SupportTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportTicketGroupByArgs['orderBy'] }
        : { orderBy?: SupportTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupportTicket model
   */
  readonly fields: SupportTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupportTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupportTicket model
   */ 
  interface SupportTicketFieldRefs {
    readonly id: FieldRef<"SupportTicket", 'String'>
    readonly projectId: FieldRef<"SupportTicket", 'String'>
    readonly requestId: FieldRef<"SupportTicket", 'String'>
    readonly requesterId: FieldRef<"SupportTicket", 'String'>
    readonly message: FieldRef<"SupportTicket", 'String'>
    readonly status: FieldRef<"SupportTicket", 'TicketStatus'>
    readonly createdAt: FieldRef<"SupportTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"SupportTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupportTicket findUnique
   */
  export type SupportTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findUniqueOrThrow
   */
  export type SupportTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket findFirst
   */
  export type SupportTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findFirstOrThrow
   */
  export type SupportTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTicket to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupportTickets.
     */
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket findMany
   */
  export type SupportTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter, which SupportTickets to fetch.
     */
    where?: SupportTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupportTickets to fetch.
     */
    orderBy?: SupportTicketOrderByWithRelationInput | SupportTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupportTickets.
     */
    cursor?: SupportTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupportTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupportTickets.
     */
    skip?: number
    distinct?: SupportTicketScalarFieldEnum | SupportTicketScalarFieldEnum[]
  }

  /**
   * SupportTicket create
   */
  export type SupportTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a SupportTicket.
     */
    data: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
  }

  /**
   * SupportTicket createMany
   */
  export type SupportTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupportTicket createManyAndReturn
   */
  export type SupportTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupportTickets.
     */
    data: SupportTicketCreateManyInput | SupportTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupportTicket update
   */
  export type SupportTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a SupportTicket.
     */
    data: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
    /**
     * Choose, which SupportTicket to update.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket updateMany
   */
  export type SupportTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupportTickets.
     */
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyInput>
    /**
     * Filter which SupportTickets to update
     */
    where?: SupportTicketWhereInput
  }

  /**
   * SupportTicket upsert
   */
  export type SupportTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the SupportTicket to update in case it exists.
     */
    where: SupportTicketWhereUniqueInput
    /**
     * In case the SupportTicket found by the `where` argument doesn't exist, create a new SupportTicket with this data.
     */
    create: XOR<SupportTicketCreateInput, SupportTicketUncheckedCreateInput>
    /**
     * In case the SupportTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportTicketUpdateInput, SupportTicketUncheckedUpdateInput>
  }

  /**
   * SupportTicket delete
   */
  export type SupportTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
    /**
     * Filter which SupportTicket to delete.
     */
    where: SupportTicketWhereUniqueInput
  }

  /**
   * SupportTicket deleteMany
   */
  export type SupportTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupportTickets to delete
     */
    where?: SupportTicketWhereInput
  }

  /**
   * SupportTicket without action
   */
  export type SupportTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupportTicket
     */
    select?: SupportTicketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportTicketInclude<ExtArgs> | null
  }


  /**
   * Model SavedProject
   */

  export type AggregateSavedProject = {
    _count: SavedProjectCountAggregateOutputType | null
    _min: SavedProjectMinAggregateOutputType | null
    _max: SavedProjectMaxAggregateOutputType | null
  }

  export type SavedProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type SavedProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type SavedProjectCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type SavedProjectMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type SavedProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    createdAt?: true
  }

  export type SavedProjectCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type SavedProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedProject to aggregate.
     */
    where?: SavedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProjects to fetch.
     */
    orderBy?: SavedProjectOrderByWithRelationInput | SavedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedProjects
    **/
    _count?: true | SavedProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedProjectMaxAggregateInputType
  }

  export type GetSavedProjectAggregateType<T extends SavedProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedProject[P]>
      : GetScalarType<T[P], AggregateSavedProject[P]>
  }




  export type SavedProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedProjectWhereInput
    orderBy?: SavedProjectOrderByWithAggregationInput | SavedProjectOrderByWithAggregationInput[]
    by: SavedProjectScalarFieldEnum[] | SavedProjectScalarFieldEnum
    having?: SavedProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedProjectCountAggregateInputType | true
    _min?: SavedProjectMinAggregateInputType
    _max?: SavedProjectMaxAggregateInputType
  }

  export type SavedProjectGroupByOutputType = {
    id: string
    userId: string
    projectId: string
    createdAt: Date
    _count: SavedProjectCountAggregateOutputType | null
    _min: SavedProjectMinAggregateOutputType | null
    _max: SavedProjectMaxAggregateOutputType | null
  }

  type GetSavedProjectGroupByPayload<T extends SavedProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedProjectGroupByOutputType[P]>
            : GetScalarType<T[P], SavedProjectGroupByOutputType[P]>
        }
      >
    >


  export type SavedProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProject"]>

  export type SavedProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedProject"]>

  export type SavedProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
    createdAt?: boolean
  }

  export type SavedProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedProject"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      projectId: string
      createdAt: Date
    }, ExtArgs["result"]["savedProject"]>
    composites: {}
  }

  type SavedProjectGetPayload<S extends boolean | null | undefined | SavedProjectDefaultArgs> = $Result.GetResult<Prisma.$SavedProjectPayload, S>

  type SavedProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavedProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavedProjectCountAggregateInputType | true
    }

  export interface SavedProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedProject'], meta: { name: 'SavedProject' } }
    /**
     * Find zero or one SavedProject that matches the filter.
     * @param {SavedProjectFindUniqueArgs} args - Arguments to find a SavedProject
     * @example
     * // Get one SavedProject
     * const savedProject = await prisma.savedProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedProjectFindUniqueArgs>(args: SelectSubset<T, SavedProjectFindUniqueArgs<ExtArgs>>): Prisma__SavedProjectClient<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SavedProject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavedProjectFindUniqueOrThrowArgs} args - Arguments to find a SavedProject
     * @example
     * // Get one SavedProject
     * const savedProject = await prisma.savedProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedProjectClient<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SavedProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProjectFindFirstArgs} args - Arguments to find a SavedProject
     * @example
     * // Get one SavedProject
     * const savedProject = await prisma.savedProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedProjectFindFirstArgs>(args?: SelectSubset<T, SavedProjectFindFirstArgs<ExtArgs>>): Prisma__SavedProjectClient<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SavedProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProjectFindFirstOrThrowArgs} args - Arguments to find a SavedProject
     * @example
     * // Get one SavedProject
     * const savedProject = await prisma.savedProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedProjectClient<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SavedProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedProjects
     * const savedProjects = await prisma.savedProject.findMany()
     * 
     * // Get first 10 SavedProjects
     * const savedProjects = await prisma.savedProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedProjectWithIdOnly = await prisma.savedProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedProjectFindManyArgs>(args?: SelectSubset<T, SavedProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SavedProject.
     * @param {SavedProjectCreateArgs} args - Arguments to create a SavedProject.
     * @example
     * // Create one SavedProject
     * const SavedProject = await prisma.savedProject.create({
     *   data: {
     *     // ... data to create a SavedProject
     *   }
     * })
     * 
     */
    create<T extends SavedProjectCreateArgs>(args: SelectSubset<T, SavedProjectCreateArgs<ExtArgs>>): Prisma__SavedProjectClient<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SavedProjects.
     * @param {SavedProjectCreateManyArgs} args - Arguments to create many SavedProjects.
     * @example
     * // Create many SavedProjects
     * const savedProject = await prisma.savedProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedProjectCreateManyArgs>(args?: SelectSubset<T, SavedProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedProjects and returns the data saved in the database.
     * @param {SavedProjectCreateManyAndReturnArgs} args - Arguments to create many SavedProjects.
     * @example
     * // Create many SavedProjects
     * const savedProject = await prisma.savedProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedProjects and only return the `id`
     * const savedProjectWithIdOnly = await prisma.savedProject.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SavedProject.
     * @param {SavedProjectDeleteArgs} args - Arguments to delete one SavedProject.
     * @example
     * // Delete one SavedProject
     * const SavedProject = await prisma.savedProject.delete({
     *   where: {
     *     // ... filter to delete one SavedProject
     *   }
     * })
     * 
     */
    delete<T extends SavedProjectDeleteArgs>(args: SelectSubset<T, SavedProjectDeleteArgs<ExtArgs>>): Prisma__SavedProjectClient<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SavedProject.
     * @param {SavedProjectUpdateArgs} args - Arguments to update one SavedProject.
     * @example
     * // Update one SavedProject
     * const savedProject = await prisma.savedProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedProjectUpdateArgs>(args: SelectSubset<T, SavedProjectUpdateArgs<ExtArgs>>): Prisma__SavedProjectClient<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SavedProjects.
     * @param {SavedProjectDeleteManyArgs} args - Arguments to filter SavedProjects to delete.
     * @example
     * // Delete a few SavedProjects
     * const { count } = await prisma.savedProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedProjectDeleteManyArgs>(args?: SelectSubset<T, SavedProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedProjects
     * const savedProject = await prisma.savedProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedProjectUpdateManyArgs>(args: SelectSubset<T, SavedProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedProject.
     * @param {SavedProjectUpsertArgs} args - Arguments to update or create a SavedProject.
     * @example
     * // Update or create a SavedProject
     * const savedProject = await prisma.savedProject.upsert({
     *   create: {
     *     // ... data to create a SavedProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedProject we want to update
     *   }
     * })
     */
    upsert<T extends SavedProjectUpsertArgs>(args: SelectSubset<T, SavedProjectUpsertArgs<ExtArgs>>): Prisma__SavedProjectClient<$Result.GetResult<Prisma.$SavedProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SavedProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProjectCountArgs} args - Arguments to filter SavedProjects to count.
     * @example
     * // Count the number of SavedProjects
     * const count = await prisma.savedProject.count({
     *   where: {
     *     // ... the filter for the SavedProjects we want to count
     *   }
     * })
    **/
    count<T extends SavedProjectCountArgs>(
      args?: Subset<T, SavedProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedProjectAggregateArgs>(args: Subset<T, SavedProjectAggregateArgs>): Prisma.PrismaPromise<GetSavedProjectAggregateType<T>>

    /**
     * Group by SavedProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedProjectGroupByArgs['orderBy'] }
        : { orderBy?: SavedProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedProject model
   */
  readonly fields: SavedProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedProject model
   */ 
  interface SavedProjectFieldRefs {
    readonly id: FieldRef<"SavedProject", 'String'>
    readonly userId: FieldRef<"SavedProject", 'String'>
    readonly projectId: FieldRef<"SavedProject", 'String'>
    readonly createdAt: FieldRef<"SavedProject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedProject findUnique
   */
  export type SavedProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which SavedProject to fetch.
     */
    where: SavedProjectWhereUniqueInput
  }

  /**
   * SavedProject findUniqueOrThrow
   */
  export type SavedProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which SavedProject to fetch.
     */
    where: SavedProjectWhereUniqueInput
  }

  /**
   * SavedProject findFirst
   */
  export type SavedProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which SavedProject to fetch.
     */
    where?: SavedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProjects to fetch.
     */
    orderBy?: SavedProjectOrderByWithRelationInput | SavedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedProjects.
     */
    cursor?: SavedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedProjects.
     */
    distinct?: SavedProjectScalarFieldEnum | SavedProjectScalarFieldEnum[]
  }

  /**
   * SavedProject findFirstOrThrow
   */
  export type SavedProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which SavedProject to fetch.
     */
    where?: SavedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProjects to fetch.
     */
    orderBy?: SavedProjectOrderByWithRelationInput | SavedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedProjects.
     */
    cursor?: SavedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedProjects.
     */
    distinct?: SavedProjectScalarFieldEnum | SavedProjectScalarFieldEnum[]
  }

  /**
   * SavedProject findMany
   */
  export type SavedProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * Filter, which SavedProjects to fetch.
     */
    where?: SavedProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedProjects to fetch.
     */
    orderBy?: SavedProjectOrderByWithRelationInput | SavedProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedProjects.
     */
    cursor?: SavedProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedProjects.
     */
    skip?: number
    distinct?: SavedProjectScalarFieldEnum | SavedProjectScalarFieldEnum[]
  }

  /**
   * SavedProject create
   */
  export type SavedProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedProject.
     */
    data: XOR<SavedProjectCreateInput, SavedProjectUncheckedCreateInput>
  }

  /**
   * SavedProject createMany
   */
  export type SavedProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedProjects.
     */
    data: SavedProjectCreateManyInput | SavedProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedProject createManyAndReturn
   */
  export type SavedProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SavedProjects.
     */
    data: SavedProjectCreateManyInput | SavedProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedProject update
   */
  export type SavedProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedProject.
     */
    data: XOR<SavedProjectUpdateInput, SavedProjectUncheckedUpdateInput>
    /**
     * Choose, which SavedProject to update.
     */
    where: SavedProjectWhereUniqueInput
  }

  /**
   * SavedProject updateMany
   */
  export type SavedProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedProjects.
     */
    data: XOR<SavedProjectUpdateManyMutationInput, SavedProjectUncheckedUpdateManyInput>
    /**
     * Filter which SavedProjects to update
     */
    where?: SavedProjectWhereInput
  }

  /**
   * SavedProject upsert
   */
  export type SavedProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedProject to update in case it exists.
     */
    where: SavedProjectWhereUniqueInput
    /**
     * In case the SavedProject found by the `where` argument doesn't exist, create a new SavedProject with this data.
     */
    create: XOR<SavedProjectCreateInput, SavedProjectUncheckedCreateInput>
    /**
     * In case the SavedProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedProjectUpdateInput, SavedProjectUncheckedUpdateInput>
  }

  /**
   * SavedProject delete
   */
  export type SavedProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
    /**
     * Filter which SavedProject to delete.
     */
    where: SavedProjectWhereUniqueInput
  }

  /**
   * SavedProject deleteMany
   */
  export type SavedProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedProjects to delete
     */
    where?: SavedProjectWhereInput
  }

  /**
   * SavedProject without action
   */
  export type SavedProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedProject
     */
    select?: SavedProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedProjectInclude<ExtArgs> | null
  }


  /**
   * Model SavedGlobalRepo
   */

  export type AggregateSavedGlobalRepo = {
    _count: SavedGlobalRepoCountAggregateOutputType | null
    _min: SavedGlobalRepoMinAggregateOutputType | null
    _max: SavedGlobalRepoMaxAggregateOutputType | null
  }

  export type SavedGlobalRepoMinAggregateOutputType = {
    id: string | null
    userId: string | null
    repoFullName: string | null
    createdAt: Date | null
  }

  export type SavedGlobalRepoMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    repoFullName: string | null
    createdAt: Date | null
  }

  export type SavedGlobalRepoCountAggregateOutputType = {
    id: number
    userId: number
    repoFullName: number
    createdAt: number
    _all: number
  }


  export type SavedGlobalRepoMinAggregateInputType = {
    id?: true
    userId?: true
    repoFullName?: true
    createdAt?: true
  }

  export type SavedGlobalRepoMaxAggregateInputType = {
    id?: true
    userId?: true
    repoFullName?: true
    createdAt?: true
  }

  export type SavedGlobalRepoCountAggregateInputType = {
    id?: true
    userId?: true
    repoFullName?: true
    createdAt?: true
    _all?: true
  }

  export type SavedGlobalRepoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedGlobalRepo to aggregate.
     */
    where?: SavedGlobalRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedGlobalRepos to fetch.
     */
    orderBy?: SavedGlobalRepoOrderByWithRelationInput | SavedGlobalRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedGlobalRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedGlobalRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedGlobalRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedGlobalRepos
    **/
    _count?: true | SavedGlobalRepoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedGlobalRepoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedGlobalRepoMaxAggregateInputType
  }

  export type GetSavedGlobalRepoAggregateType<T extends SavedGlobalRepoAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedGlobalRepo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedGlobalRepo[P]>
      : GetScalarType<T[P], AggregateSavedGlobalRepo[P]>
  }




  export type SavedGlobalRepoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedGlobalRepoWhereInput
    orderBy?: SavedGlobalRepoOrderByWithAggregationInput | SavedGlobalRepoOrderByWithAggregationInput[]
    by: SavedGlobalRepoScalarFieldEnum[] | SavedGlobalRepoScalarFieldEnum
    having?: SavedGlobalRepoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedGlobalRepoCountAggregateInputType | true
    _min?: SavedGlobalRepoMinAggregateInputType
    _max?: SavedGlobalRepoMaxAggregateInputType
  }

  export type SavedGlobalRepoGroupByOutputType = {
    id: string
    userId: string
    repoFullName: string
    createdAt: Date
    _count: SavedGlobalRepoCountAggregateOutputType | null
    _min: SavedGlobalRepoMinAggregateOutputType | null
    _max: SavedGlobalRepoMaxAggregateOutputType | null
  }

  type GetSavedGlobalRepoGroupByPayload<T extends SavedGlobalRepoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedGlobalRepoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedGlobalRepoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedGlobalRepoGroupByOutputType[P]>
            : GetScalarType<T[P], SavedGlobalRepoGroupByOutputType[P]>
        }
      >
    >


  export type SavedGlobalRepoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repoFullName?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedGlobalRepo"]>

  export type SavedGlobalRepoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repoFullName?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedGlobalRepo"]>

  export type SavedGlobalRepoSelectScalar = {
    id?: boolean
    userId?: boolean
    repoFullName?: boolean
    createdAt?: boolean
  }

  export type SavedGlobalRepoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SavedGlobalRepoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavedGlobalRepoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedGlobalRepo"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      repoFullName: string
      createdAt: Date
    }, ExtArgs["result"]["savedGlobalRepo"]>
    composites: {}
  }

  type SavedGlobalRepoGetPayload<S extends boolean | null | undefined | SavedGlobalRepoDefaultArgs> = $Result.GetResult<Prisma.$SavedGlobalRepoPayload, S>

  type SavedGlobalRepoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SavedGlobalRepoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SavedGlobalRepoCountAggregateInputType | true
    }

  export interface SavedGlobalRepoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedGlobalRepo'], meta: { name: 'SavedGlobalRepo' } }
    /**
     * Find zero or one SavedGlobalRepo that matches the filter.
     * @param {SavedGlobalRepoFindUniqueArgs} args - Arguments to find a SavedGlobalRepo
     * @example
     * // Get one SavedGlobalRepo
     * const savedGlobalRepo = await prisma.savedGlobalRepo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedGlobalRepoFindUniqueArgs>(args: SelectSubset<T, SavedGlobalRepoFindUniqueArgs<ExtArgs>>): Prisma__SavedGlobalRepoClient<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SavedGlobalRepo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SavedGlobalRepoFindUniqueOrThrowArgs} args - Arguments to find a SavedGlobalRepo
     * @example
     * // Get one SavedGlobalRepo
     * const savedGlobalRepo = await prisma.savedGlobalRepo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedGlobalRepoFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedGlobalRepoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedGlobalRepoClient<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SavedGlobalRepo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGlobalRepoFindFirstArgs} args - Arguments to find a SavedGlobalRepo
     * @example
     * // Get one SavedGlobalRepo
     * const savedGlobalRepo = await prisma.savedGlobalRepo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedGlobalRepoFindFirstArgs>(args?: SelectSubset<T, SavedGlobalRepoFindFirstArgs<ExtArgs>>): Prisma__SavedGlobalRepoClient<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SavedGlobalRepo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGlobalRepoFindFirstOrThrowArgs} args - Arguments to find a SavedGlobalRepo
     * @example
     * // Get one SavedGlobalRepo
     * const savedGlobalRepo = await prisma.savedGlobalRepo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedGlobalRepoFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedGlobalRepoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedGlobalRepoClient<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SavedGlobalRepos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGlobalRepoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedGlobalRepos
     * const savedGlobalRepos = await prisma.savedGlobalRepo.findMany()
     * 
     * // Get first 10 SavedGlobalRepos
     * const savedGlobalRepos = await prisma.savedGlobalRepo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedGlobalRepoWithIdOnly = await prisma.savedGlobalRepo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedGlobalRepoFindManyArgs>(args?: SelectSubset<T, SavedGlobalRepoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SavedGlobalRepo.
     * @param {SavedGlobalRepoCreateArgs} args - Arguments to create a SavedGlobalRepo.
     * @example
     * // Create one SavedGlobalRepo
     * const SavedGlobalRepo = await prisma.savedGlobalRepo.create({
     *   data: {
     *     // ... data to create a SavedGlobalRepo
     *   }
     * })
     * 
     */
    create<T extends SavedGlobalRepoCreateArgs>(args: SelectSubset<T, SavedGlobalRepoCreateArgs<ExtArgs>>): Prisma__SavedGlobalRepoClient<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SavedGlobalRepos.
     * @param {SavedGlobalRepoCreateManyArgs} args - Arguments to create many SavedGlobalRepos.
     * @example
     * // Create many SavedGlobalRepos
     * const savedGlobalRepo = await prisma.savedGlobalRepo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedGlobalRepoCreateManyArgs>(args?: SelectSubset<T, SavedGlobalRepoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedGlobalRepos and returns the data saved in the database.
     * @param {SavedGlobalRepoCreateManyAndReturnArgs} args - Arguments to create many SavedGlobalRepos.
     * @example
     * // Create many SavedGlobalRepos
     * const savedGlobalRepo = await prisma.savedGlobalRepo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedGlobalRepos and only return the `id`
     * const savedGlobalRepoWithIdOnly = await prisma.savedGlobalRepo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedGlobalRepoCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedGlobalRepoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SavedGlobalRepo.
     * @param {SavedGlobalRepoDeleteArgs} args - Arguments to delete one SavedGlobalRepo.
     * @example
     * // Delete one SavedGlobalRepo
     * const SavedGlobalRepo = await prisma.savedGlobalRepo.delete({
     *   where: {
     *     // ... filter to delete one SavedGlobalRepo
     *   }
     * })
     * 
     */
    delete<T extends SavedGlobalRepoDeleteArgs>(args: SelectSubset<T, SavedGlobalRepoDeleteArgs<ExtArgs>>): Prisma__SavedGlobalRepoClient<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SavedGlobalRepo.
     * @param {SavedGlobalRepoUpdateArgs} args - Arguments to update one SavedGlobalRepo.
     * @example
     * // Update one SavedGlobalRepo
     * const savedGlobalRepo = await prisma.savedGlobalRepo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedGlobalRepoUpdateArgs>(args: SelectSubset<T, SavedGlobalRepoUpdateArgs<ExtArgs>>): Prisma__SavedGlobalRepoClient<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SavedGlobalRepos.
     * @param {SavedGlobalRepoDeleteManyArgs} args - Arguments to filter SavedGlobalRepos to delete.
     * @example
     * // Delete a few SavedGlobalRepos
     * const { count } = await prisma.savedGlobalRepo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedGlobalRepoDeleteManyArgs>(args?: SelectSubset<T, SavedGlobalRepoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedGlobalRepos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGlobalRepoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedGlobalRepos
     * const savedGlobalRepo = await prisma.savedGlobalRepo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedGlobalRepoUpdateManyArgs>(args: SelectSubset<T, SavedGlobalRepoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedGlobalRepo.
     * @param {SavedGlobalRepoUpsertArgs} args - Arguments to update or create a SavedGlobalRepo.
     * @example
     * // Update or create a SavedGlobalRepo
     * const savedGlobalRepo = await prisma.savedGlobalRepo.upsert({
     *   create: {
     *     // ... data to create a SavedGlobalRepo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedGlobalRepo we want to update
     *   }
     * })
     */
    upsert<T extends SavedGlobalRepoUpsertArgs>(args: SelectSubset<T, SavedGlobalRepoUpsertArgs<ExtArgs>>): Prisma__SavedGlobalRepoClient<$Result.GetResult<Prisma.$SavedGlobalRepoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SavedGlobalRepos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGlobalRepoCountArgs} args - Arguments to filter SavedGlobalRepos to count.
     * @example
     * // Count the number of SavedGlobalRepos
     * const count = await prisma.savedGlobalRepo.count({
     *   where: {
     *     // ... the filter for the SavedGlobalRepos we want to count
     *   }
     * })
    **/
    count<T extends SavedGlobalRepoCountArgs>(
      args?: Subset<T, SavedGlobalRepoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedGlobalRepoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedGlobalRepo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGlobalRepoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedGlobalRepoAggregateArgs>(args: Subset<T, SavedGlobalRepoAggregateArgs>): Prisma.PrismaPromise<GetSavedGlobalRepoAggregateType<T>>

    /**
     * Group by SavedGlobalRepo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedGlobalRepoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedGlobalRepoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedGlobalRepoGroupByArgs['orderBy'] }
        : { orderBy?: SavedGlobalRepoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedGlobalRepoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedGlobalRepoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedGlobalRepo model
   */
  readonly fields: SavedGlobalRepoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedGlobalRepo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedGlobalRepoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedGlobalRepo model
   */ 
  interface SavedGlobalRepoFieldRefs {
    readonly id: FieldRef<"SavedGlobalRepo", 'String'>
    readonly userId: FieldRef<"SavedGlobalRepo", 'String'>
    readonly repoFullName: FieldRef<"SavedGlobalRepo", 'String'>
    readonly createdAt: FieldRef<"SavedGlobalRepo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedGlobalRepo findUnique
   */
  export type SavedGlobalRepoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * Filter, which SavedGlobalRepo to fetch.
     */
    where: SavedGlobalRepoWhereUniqueInput
  }

  /**
   * SavedGlobalRepo findUniqueOrThrow
   */
  export type SavedGlobalRepoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * Filter, which SavedGlobalRepo to fetch.
     */
    where: SavedGlobalRepoWhereUniqueInput
  }

  /**
   * SavedGlobalRepo findFirst
   */
  export type SavedGlobalRepoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * Filter, which SavedGlobalRepo to fetch.
     */
    where?: SavedGlobalRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedGlobalRepos to fetch.
     */
    orderBy?: SavedGlobalRepoOrderByWithRelationInput | SavedGlobalRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedGlobalRepos.
     */
    cursor?: SavedGlobalRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedGlobalRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedGlobalRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedGlobalRepos.
     */
    distinct?: SavedGlobalRepoScalarFieldEnum | SavedGlobalRepoScalarFieldEnum[]
  }

  /**
   * SavedGlobalRepo findFirstOrThrow
   */
  export type SavedGlobalRepoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * Filter, which SavedGlobalRepo to fetch.
     */
    where?: SavedGlobalRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedGlobalRepos to fetch.
     */
    orderBy?: SavedGlobalRepoOrderByWithRelationInput | SavedGlobalRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedGlobalRepos.
     */
    cursor?: SavedGlobalRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedGlobalRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedGlobalRepos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedGlobalRepos.
     */
    distinct?: SavedGlobalRepoScalarFieldEnum | SavedGlobalRepoScalarFieldEnum[]
  }

  /**
   * SavedGlobalRepo findMany
   */
  export type SavedGlobalRepoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * Filter, which SavedGlobalRepos to fetch.
     */
    where?: SavedGlobalRepoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedGlobalRepos to fetch.
     */
    orderBy?: SavedGlobalRepoOrderByWithRelationInput | SavedGlobalRepoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedGlobalRepos.
     */
    cursor?: SavedGlobalRepoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedGlobalRepos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedGlobalRepos.
     */
    skip?: number
    distinct?: SavedGlobalRepoScalarFieldEnum | SavedGlobalRepoScalarFieldEnum[]
  }

  /**
   * SavedGlobalRepo create
   */
  export type SavedGlobalRepoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedGlobalRepo.
     */
    data: XOR<SavedGlobalRepoCreateInput, SavedGlobalRepoUncheckedCreateInput>
  }

  /**
   * SavedGlobalRepo createMany
   */
  export type SavedGlobalRepoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedGlobalRepos.
     */
    data: SavedGlobalRepoCreateManyInput | SavedGlobalRepoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedGlobalRepo createManyAndReturn
   */
  export type SavedGlobalRepoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SavedGlobalRepos.
     */
    data: SavedGlobalRepoCreateManyInput | SavedGlobalRepoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SavedGlobalRepo update
   */
  export type SavedGlobalRepoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedGlobalRepo.
     */
    data: XOR<SavedGlobalRepoUpdateInput, SavedGlobalRepoUncheckedUpdateInput>
    /**
     * Choose, which SavedGlobalRepo to update.
     */
    where: SavedGlobalRepoWhereUniqueInput
  }

  /**
   * SavedGlobalRepo updateMany
   */
  export type SavedGlobalRepoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedGlobalRepos.
     */
    data: XOR<SavedGlobalRepoUpdateManyMutationInput, SavedGlobalRepoUncheckedUpdateManyInput>
    /**
     * Filter which SavedGlobalRepos to update
     */
    where?: SavedGlobalRepoWhereInput
  }

  /**
   * SavedGlobalRepo upsert
   */
  export type SavedGlobalRepoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedGlobalRepo to update in case it exists.
     */
    where: SavedGlobalRepoWhereUniqueInput
    /**
     * In case the SavedGlobalRepo found by the `where` argument doesn't exist, create a new SavedGlobalRepo with this data.
     */
    create: XOR<SavedGlobalRepoCreateInput, SavedGlobalRepoUncheckedCreateInput>
    /**
     * In case the SavedGlobalRepo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedGlobalRepoUpdateInput, SavedGlobalRepoUncheckedUpdateInput>
  }

  /**
   * SavedGlobalRepo delete
   */
  export type SavedGlobalRepoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
    /**
     * Filter which SavedGlobalRepo to delete.
     */
    where: SavedGlobalRepoWhereUniqueInput
  }

  /**
   * SavedGlobalRepo deleteMany
   */
  export type SavedGlobalRepoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedGlobalRepos to delete
     */
    where?: SavedGlobalRepoWhereInput
  }

  /**
   * SavedGlobalRepo without action
   */
  export type SavedGlobalRepoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedGlobalRepo
     */
    select?: SavedGlobalRepoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedGlobalRepoInclude<ExtArgs> | null
  }


  /**
   * Model Revival
   */

  export type AggregateRevival = {
    _count: RevivalCountAggregateOutputType | null
    _min: RevivalMinAggregateOutputType | null
    _max: RevivalMaxAggregateOutputType | null
  }

  export type RevivalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    repoFullName: string | null
    revivalType: string | null
    status: string | null
    forkUrl: string | null
    startedAt: Date | null
  }

  export type RevivalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    repoFullName: string | null
    revivalType: string | null
    status: string | null
    forkUrl: string | null
    startedAt: Date | null
  }

  export type RevivalCountAggregateOutputType = {
    id: number
    userId: number
    repoFullName: number
    revivalType: number
    status: number
    forkUrl: number
    startedAt: number
    _all: number
  }


  export type RevivalMinAggregateInputType = {
    id?: true
    userId?: true
    repoFullName?: true
    revivalType?: true
    status?: true
    forkUrl?: true
    startedAt?: true
  }

  export type RevivalMaxAggregateInputType = {
    id?: true
    userId?: true
    repoFullName?: true
    revivalType?: true
    status?: true
    forkUrl?: true
    startedAt?: true
  }

  export type RevivalCountAggregateInputType = {
    id?: true
    userId?: true
    repoFullName?: true
    revivalType?: true
    status?: true
    forkUrl?: true
    startedAt?: true
    _all?: true
  }

  export type RevivalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revival to aggregate.
     */
    where?: RevivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revivals to fetch.
     */
    orderBy?: RevivalOrderByWithRelationInput | RevivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Revivals
    **/
    _count?: true | RevivalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevivalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevivalMaxAggregateInputType
  }

  export type GetRevivalAggregateType<T extends RevivalAggregateArgs> = {
        [P in keyof T & keyof AggregateRevival]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevival[P]>
      : GetScalarType<T[P], AggregateRevival[P]>
  }




  export type RevivalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevivalWhereInput
    orderBy?: RevivalOrderByWithAggregationInput | RevivalOrderByWithAggregationInput[]
    by: RevivalScalarFieldEnum[] | RevivalScalarFieldEnum
    having?: RevivalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevivalCountAggregateInputType | true
    _min?: RevivalMinAggregateInputType
    _max?: RevivalMaxAggregateInputType
  }

  export type RevivalGroupByOutputType = {
    id: string
    userId: string
    repoFullName: string
    revivalType: string
    status: string
    forkUrl: string | null
    startedAt: Date
    _count: RevivalCountAggregateOutputType | null
    _min: RevivalMinAggregateOutputType | null
    _max: RevivalMaxAggregateOutputType | null
  }

  type GetRevivalGroupByPayload<T extends RevivalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevivalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevivalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevivalGroupByOutputType[P]>
            : GetScalarType<T[P], RevivalGroupByOutputType[P]>
        }
      >
    >


  export type RevivalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repoFullName?: boolean
    revivalType?: boolean
    status?: boolean
    forkUrl?: boolean
    startedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revival"]>

  export type RevivalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    repoFullName?: boolean
    revivalType?: boolean
    status?: boolean
    forkUrl?: boolean
    startedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revival"]>

  export type RevivalSelectScalar = {
    id?: boolean
    userId?: boolean
    repoFullName?: boolean
    revivalType?: boolean
    status?: boolean
    forkUrl?: boolean
    startedAt?: boolean
  }

  export type RevivalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RevivalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RevivalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Revival"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      repoFullName: string
      revivalType: string
      status: string
      forkUrl: string | null
      startedAt: Date
    }, ExtArgs["result"]["revival"]>
    composites: {}
  }

  type RevivalGetPayload<S extends boolean | null | undefined | RevivalDefaultArgs> = $Result.GetResult<Prisma.$RevivalPayload, S>

  type RevivalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RevivalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RevivalCountAggregateInputType | true
    }

  export interface RevivalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Revival'], meta: { name: 'Revival' } }
    /**
     * Find zero or one Revival that matches the filter.
     * @param {RevivalFindUniqueArgs} args - Arguments to find a Revival
     * @example
     * // Get one Revival
     * const revival = await prisma.revival.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevivalFindUniqueArgs>(args: SelectSubset<T, RevivalFindUniqueArgs<ExtArgs>>): Prisma__RevivalClient<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Revival that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RevivalFindUniqueOrThrowArgs} args - Arguments to find a Revival
     * @example
     * // Get one Revival
     * const revival = await prisma.revival.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevivalFindUniqueOrThrowArgs>(args: SelectSubset<T, RevivalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevivalClient<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Revival that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevivalFindFirstArgs} args - Arguments to find a Revival
     * @example
     * // Get one Revival
     * const revival = await prisma.revival.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevivalFindFirstArgs>(args?: SelectSubset<T, RevivalFindFirstArgs<ExtArgs>>): Prisma__RevivalClient<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Revival that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevivalFindFirstOrThrowArgs} args - Arguments to find a Revival
     * @example
     * // Get one Revival
     * const revival = await prisma.revival.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevivalFindFirstOrThrowArgs>(args?: SelectSubset<T, RevivalFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevivalClient<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Revivals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevivalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Revivals
     * const revivals = await prisma.revival.findMany()
     * 
     * // Get first 10 Revivals
     * const revivals = await prisma.revival.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revivalWithIdOnly = await prisma.revival.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevivalFindManyArgs>(args?: SelectSubset<T, RevivalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Revival.
     * @param {RevivalCreateArgs} args - Arguments to create a Revival.
     * @example
     * // Create one Revival
     * const Revival = await prisma.revival.create({
     *   data: {
     *     // ... data to create a Revival
     *   }
     * })
     * 
     */
    create<T extends RevivalCreateArgs>(args: SelectSubset<T, RevivalCreateArgs<ExtArgs>>): Prisma__RevivalClient<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Revivals.
     * @param {RevivalCreateManyArgs} args - Arguments to create many Revivals.
     * @example
     * // Create many Revivals
     * const revival = await prisma.revival.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevivalCreateManyArgs>(args?: SelectSubset<T, RevivalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Revivals and returns the data saved in the database.
     * @param {RevivalCreateManyAndReturnArgs} args - Arguments to create many Revivals.
     * @example
     * // Create many Revivals
     * const revival = await prisma.revival.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Revivals and only return the `id`
     * const revivalWithIdOnly = await prisma.revival.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevivalCreateManyAndReturnArgs>(args?: SelectSubset<T, RevivalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Revival.
     * @param {RevivalDeleteArgs} args - Arguments to delete one Revival.
     * @example
     * // Delete one Revival
     * const Revival = await prisma.revival.delete({
     *   where: {
     *     // ... filter to delete one Revival
     *   }
     * })
     * 
     */
    delete<T extends RevivalDeleteArgs>(args: SelectSubset<T, RevivalDeleteArgs<ExtArgs>>): Prisma__RevivalClient<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Revival.
     * @param {RevivalUpdateArgs} args - Arguments to update one Revival.
     * @example
     * // Update one Revival
     * const revival = await prisma.revival.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevivalUpdateArgs>(args: SelectSubset<T, RevivalUpdateArgs<ExtArgs>>): Prisma__RevivalClient<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Revivals.
     * @param {RevivalDeleteManyArgs} args - Arguments to filter Revivals to delete.
     * @example
     * // Delete a few Revivals
     * const { count } = await prisma.revival.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevivalDeleteManyArgs>(args?: SelectSubset<T, RevivalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Revivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevivalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Revivals
     * const revival = await prisma.revival.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevivalUpdateManyArgs>(args: SelectSubset<T, RevivalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Revival.
     * @param {RevivalUpsertArgs} args - Arguments to update or create a Revival.
     * @example
     * // Update or create a Revival
     * const revival = await prisma.revival.upsert({
     *   create: {
     *     // ... data to create a Revival
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Revival we want to update
     *   }
     * })
     */
    upsert<T extends RevivalUpsertArgs>(args: SelectSubset<T, RevivalUpsertArgs<ExtArgs>>): Prisma__RevivalClient<$Result.GetResult<Prisma.$RevivalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Revivals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevivalCountArgs} args - Arguments to filter Revivals to count.
     * @example
     * // Count the number of Revivals
     * const count = await prisma.revival.count({
     *   where: {
     *     // ... the filter for the Revivals we want to count
     *   }
     * })
    **/
    count<T extends RevivalCountArgs>(
      args?: Subset<T, RevivalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevivalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Revival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevivalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RevivalAggregateArgs>(args: Subset<T, RevivalAggregateArgs>): Prisma.PrismaPromise<GetRevivalAggregateType<T>>

    /**
     * Group by Revival.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevivalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RevivalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevivalGroupByArgs['orderBy'] }
        : { orderBy?: RevivalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RevivalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevivalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Revival model
   */
  readonly fields: RevivalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Revival.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevivalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Revival model
   */ 
  interface RevivalFieldRefs {
    readonly id: FieldRef<"Revival", 'String'>
    readonly userId: FieldRef<"Revival", 'String'>
    readonly repoFullName: FieldRef<"Revival", 'String'>
    readonly revivalType: FieldRef<"Revival", 'String'>
    readonly status: FieldRef<"Revival", 'String'>
    readonly forkUrl: FieldRef<"Revival", 'String'>
    readonly startedAt: FieldRef<"Revival", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Revival findUnique
   */
  export type RevivalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * Filter, which Revival to fetch.
     */
    where: RevivalWhereUniqueInput
  }

  /**
   * Revival findUniqueOrThrow
   */
  export type RevivalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * Filter, which Revival to fetch.
     */
    where: RevivalWhereUniqueInput
  }

  /**
   * Revival findFirst
   */
  export type RevivalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * Filter, which Revival to fetch.
     */
    where?: RevivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revivals to fetch.
     */
    orderBy?: RevivalOrderByWithRelationInput | RevivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revivals.
     */
    cursor?: RevivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revivals.
     */
    distinct?: RevivalScalarFieldEnum | RevivalScalarFieldEnum[]
  }

  /**
   * Revival findFirstOrThrow
   */
  export type RevivalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * Filter, which Revival to fetch.
     */
    where?: RevivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revivals to fetch.
     */
    orderBy?: RevivalOrderByWithRelationInput | RevivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revivals.
     */
    cursor?: RevivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revivals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revivals.
     */
    distinct?: RevivalScalarFieldEnum | RevivalScalarFieldEnum[]
  }

  /**
   * Revival findMany
   */
  export type RevivalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * Filter, which Revivals to fetch.
     */
    where?: RevivalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revivals to fetch.
     */
    orderBy?: RevivalOrderByWithRelationInput | RevivalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Revivals.
     */
    cursor?: RevivalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revivals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revivals.
     */
    skip?: number
    distinct?: RevivalScalarFieldEnum | RevivalScalarFieldEnum[]
  }

  /**
   * Revival create
   */
  export type RevivalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * The data needed to create a Revival.
     */
    data: XOR<RevivalCreateInput, RevivalUncheckedCreateInput>
  }

  /**
   * Revival createMany
   */
  export type RevivalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Revivals.
     */
    data: RevivalCreateManyInput | RevivalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Revival createManyAndReturn
   */
  export type RevivalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Revivals.
     */
    data: RevivalCreateManyInput | RevivalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Revival update
   */
  export type RevivalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * The data needed to update a Revival.
     */
    data: XOR<RevivalUpdateInput, RevivalUncheckedUpdateInput>
    /**
     * Choose, which Revival to update.
     */
    where: RevivalWhereUniqueInput
  }

  /**
   * Revival updateMany
   */
  export type RevivalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Revivals.
     */
    data: XOR<RevivalUpdateManyMutationInput, RevivalUncheckedUpdateManyInput>
    /**
     * Filter which Revivals to update
     */
    where?: RevivalWhereInput
  }

  /**
   * Revival upsert
   */
  export type RevivalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * The filter to search for the Revival to update in case it exists.
     */
    where: RevivalWhereUniqueInput
    /**
     * In case the Revival found by the `where` argument doesn't exist, create a new Revival with this data.
     */
    create: XOR<RevivalCreateInput, RevivalUncheckedCreateInput>
    /**
     * In case the Revival was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevivalUpdateInput, RevivalUncheckedUpdateInput>
  }

  /**
   * Revival delete
   */
  export type RevivalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
    /**
     * Filter which Revival to delete.
     */
    where: RevivalWhereUniqueInput
  }

  /**
   * Revival deleteMany
   */
  export type RevivalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revivals to delete
     */
    where?: RevivalWhereInput
  }

  /**
   * Revival without action
   */
  export type RevivalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revival
     */
    select?: RevivalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevivalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    repoUrl: 'repoUrl',
    repoFullName: 'repoFullName',
    slug: 'slug',
    title: 'title',
    shortDescription: 'shortDescription',
    status: 'status',
    completionStage: 'completionStage',
    abandonmentReason: 'abandonmentReason',
    helpNeeded: 'helpNeeded',
    tags: 'tags',
    lastRepoActivityAt: 'lastRepoActivityAt',
    handoffWhat: 'handoffWhat',
    handoffCompleted: 'handoffCompleted',
    handoffPending: 'handoffPending',
    handoffSetup: 'handoffSetup',
    handoffKnownIssues: 'handoffKnownIssues',
    handoffNotes: 'handoffNotes',
    isPriority: 'isPriority',
    priorityExpiresAt: 'priorityExpiresAt',
    adoptedById: 'adoptedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    healthScore: 'healthScore',
    language: 'language',
    lastCommitDate: 'lastCommitDate',
    stars: 'stars',
    revivalMode: 'revivalMode'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const AIAnalysisScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    summary: 'summary',
    problemsDetected: 'problemsDetected',
    revivalRoadmap: 'revivalRoadmap',
    difficultyLevel: 'difficultyLevel',
    structureExplanation: 'structureExplanation',
    stoppageReason: 'stoppageReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIAnalysisScalarFieldEnum = (typeof AIAnalysisScalarFieldEnum)[keyof typeof AIAnalysisScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    requesterId: 'requesterId',
    type: 'type',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    revivalMode: 'revivalMode'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const SupportTicketScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    requestId: 'requestId',
    requesterId: 'requesterId',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupportTicketScalarFieldEnum = (typeof SupportTicketScalarFieldEnum)[keyof typeof SupportTicketScalarFieldEnum]


  export const SavedProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    createdAt: 'createdAt'
  };

  export type SavedProjectScalarFieldEnum = (typeof SavedProjectScalarFieldEnum)[keyof typeof SavedProjectScalarFieldEnum]


  export const SavedGlobalRepoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    repoFullName: 'repoFullName',
    createdAt: 'createdAt'
  };

  export type SavedGlobalRepoScalarFieldEnum = (typeof SavedGlobalRepoScalarFieldEnum)[keyof typeof SavedGlobalRepoScalarFieldEnum]


  export const RevivalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    repoFullName: 'repoFullName',
    revivalType: 'revivalType',
    status: 'status',
    forkUrl: 'forkUrl',
    startedAt: 'startedAt'
  };

  export type RevivalScalarFieldEnum = (typeof RevivalScalarFieldEnum)[keyof typeof RevivalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'CompletionStage'
   */
  export type EnumCompletionStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompletionStage'>
    


  /**
   * Reference to a field of type 'CompletionStage[]'
   */
  export type ListEnumCompletionStageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompletionStage[]'>
    


  /**
   * Reference to a field of type 'AbandonmentReason'
   */
  export type EnumAbandonmentReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AbandonmentReason'>
    


  /**
   * Reference to a field of type 'AbandonmentReason[]'
   */
  export type ListEnumAbandonmentReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AbandonmentReason[]'>
    


  /**
   * Reference to a field of type 'HelpType[]'
   */
  export type ListEnumHelpTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HelpType[]'>
    


  /**
   * Reference to a field of type 'HelpType'
   */
  export type EnumHelpTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HelpType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RevivalMode'
   */
  export type EnumRevivalModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RevivalMode'>
    


  /**
   * Reference to a field of type 'RevivalMode[]'
   */
  export type ListEnumRevivalModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RevivalMode[]'>
    


  /**
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'DifficultyLevel[]'
   */
  export type ListEnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel[]'>
    


  /**
   * Reference to a field of type 'RequestType'
   */
  export type EnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType'>
    


  /**
   * Reference to a field of type 'RequestType[]'
   */
  export type ListEnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    projectsAdopted?: ProjectListRelationFilter
    projectsOwned?: ProjectListRelationFilter
    requests?: RequestListRelationFilter
    savedProjects?: SavedProjectListRelationFilter
    sessions?: SessionListRelationFilter
    tickets?: SupportTicketListRelationFilter
    revivals?: RevivalListRelationFilter
    savedGlobalRepos?: SavedGlobalRepoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    projectsAdopted?: ProjectOrderByRelationAggregateInput
    projectsOwned?: ProjectOrderByRelationAggregateInput
    requests?: RequestOrderByRelationAggregateInput
    savedProjects?: SavedProjectOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    tickets?: SupportTicketOrderByRelationAggregateInput
    revivals?: RevivalOrderByRelationAggregateInput
    savedGlobalRepos?: SavedGlobalRepoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    projectsAdopted?: ProjectListRelationFilter
    projectsOwned?: ProjectListRelationFilter
    requests?: RequestListRelationFilter
    savedProjects?: SavedProjectListRelationFilter
    sessions?: SessionListRelationFilter
    tickets?: SupportTicketListRelationFilter
    revivals?: RevivalListRelationFilter
    savedGlobalRepos?: SavedGlobalRepoListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    id?: StringFilter<"VerificationToken"> | string
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "id" | "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationToken"> | string
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    repoUrl?: StringFilter<"Project"> | string
    repoFullName?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    shortDescription?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFilter<"Project"> | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFilter<"Project"> | $Enums.AbandonmentReason
    helpNeeded?: EnumHelpTypeNullableListFilter<"Project">
    tags?: StringNullableListFilter<"Project">
    lastRepoActivityAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    handoffWhat?: StringNullableFilter<"Project"> | string | null
    handoffCompleted?: StringNullableFilter<"Project"> | string | null
    handoffPending?: StringNullableFilter<"Project"> | string | null
    handoffSetup?: StringNullableFilter<"Project"> | string | null
    handoffKnownIssues?: StringNullableFilter<"Project"> | string | null
    handoffNotes?: StringNullableFilter<"Project"> | string | null
    isPriority?: BoolFilter<"Project"> | boolean
    priorityExpiresAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    adoptedById?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    healthScore?: IntFilter<"Project"> | number
    language?: StringNullableFilter<"Project"> | string | null
    lastCommitDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    stars?: IntFilter<"Project"> | number
    revivalMode?: EnumRevivalModeFilter<"Project"> | $Enums.RevivalMode
    analysis?: XOR<AIAnalysisNullableRelationFilter, AIAnalysisWhereInput> | null
    adoptedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    owner?: XOR<UserRelationFilter, UserWhereInput>
    requests?: RequestListRelationFilter
    savedIn?: SavedProjectListRelationFilter
    supportTickets?: SupportTicketListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    status?: SortOrder
    completionStage?: SortOrder
    abandonmentReason?: SortOrder
    helpNeeded?: SortOrder
    tags?: SortOrder
    lastRepoActivityAt?: SortOrderInput | SortOrder
    handoffWhat?: SortOrderInput | SortOrder
    handoffCompleted?: SortOrderInput | SortOrder
    handoffPending?: SortOrderInput | SortOrder
    handoffSetup?: SortOrderInput | SortOrder
    handoffKnownIssues?: SortOrderInput | SortOrder
    handoffNotes?: SortOrderInput | SortOrder
    isPriority?: SortOrder
    priorityExpiresAt?: SortOrderInput | SortOrder
    adoptedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    healthScore?: SortOrder
    language?: SortOrderInput | SortOrder
    lastCommitDate?: SortOrderInput | SortOrder
    stars?: SortOrder
    revivalMode?: SortOrder
    analysis?: AIAnalysisOrderByWithRelationInput
    adoptedBy?: UserOrderByWithRelationInput
    owner?: UserOrderByWithRelationInput
    requests?: RequestOrderByRelationAggregateInput
    savedIn?: SavedProjectOrderByRelationAggregateInput
    supportTickets?: SupportTicketOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    ownerId?: StringFilter<"Project"> | string
    repoUrl?: StringFilter<"Project"> | string
    repoFullName?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    shortDescription?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFilter<"Project"> | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFilter<"Project"> | $Enums.AbandonmentReason
    helpNeeded?: EnumHelpTypeNullableListFilter<"Project">
    tags?: StringNullableListFilter<"Project">
    lastRepoActivityAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    handoffWhat?: StringNullableFilter<"Project"> | string | null
    handoffCompleted?: StringNullableFilter<"Project"> | string | null
    handoffPending?: StringNullableFilter<"Project"> | string | null
    handoffSetup?: StringNullableFilter<"Project"> | string | null
    handoffKnownIssues?: StringNullableFilter<"Project"> | string | null
    handoffNotes?: StringNullableFilter<"Project"> | string | null
    isPriority?: BoolFilter<"Project"> | boolean
    priorityExpiresAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    adoptedById?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    healthScore?: IntFilter<"Project"> | number
    language?: StringNullableFilter<"Project"> | string | null
    lastCommitDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    stars?: IntFilter<"Project"> | number
    revivalMode?: EnumRevivalModeFilter<"Project"> | $Enums.RevivalMode
    analysis?: XOR<AIAnalysisNullableRelationFilter, AIAnalysisWhereInput> | null
    adoptedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    owner?: XOR<UserRelationFilter, UserWhereInput>
    requests?: RequestListRelationFilter
    savedIn?: SavedProjectListRelationFilter
    supportTickets?: SupportTicketListRelationFilter
  }, "id" | "slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    status?: SortOrder
    completionStage?: SortOrder
    abandonmentReason?: SortOrder
    helpNeeded?: SortOrder
    tags?: SortOrder
    lastRepoActivityAt?: SortOrderInput | SortOrder
    handoffWhat?: SortOrderInput | SortOrder
    handoffCompleted?: SortOrderInput | SortOrder
    handoffPending?: SortOrderInput | SortOrder
    handoffSetup?: SortOrderInput | SortOrder
    handoffKnownIssues?: SortOrderInput | SortOrder
    handoffNotes?: SortOrderInput | SortOrder
    isPriority?: SortOrder
    priorityExpiresAt?: SortOrderInput | SortOrder
    adoptedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    healthScore?: SortOrder
    language?: SortOrderInput | SortOrder
    lastCommitDate?: SortOrderInput | SortOrder
    stars?: SortOrder
    revivalMode?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    ownerId?: StringWithAggregatesFilter<"Project"> | string
    repoUrl?: StringWithAggregatesFilter<"Project"> | string
    repoFullName?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    shortDescription?: StringWithAggregatesFilter<"Project"> | string
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageWithAggregatesFilter<"Project"> | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonWithAggregatesFilter<"Project"> | $Enums.AbandonmentReason
    helpNeeded?: EnumHelpTypeNullableListFilter<"Project">
    tags?: StringNullableListFilter<"Project">
    lastRepoActivityAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    handoffWhat?: StringNullableWithAggregatesFilter<"Project"> | string | null
    handoffCompleted?: StringNullableWithAggregatesFilter<"Project"> | string | null
    handoffPending?: StringNullableWithAggregatesFilter<"Project"> | string | null
    handoffSetup?: StringNullableWithAggregatesFilter<"Project"> | string | null
    handoffKnownIssues?: StringNullableWithAggregatesFilter<"Project"> | string | null
    handoffNotes?: StringNullableWithAggregatesFilter<"Project"> | string | null
    isPriority?: BoolWithAggregatesFilter<"Project"> | boolean
    priorityExpiresAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    adoptedById?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    healthScore?: IntWithAggregatesFilter<"Project"> | number
    language?: StringNullableWithAggregatesFilter<"Project"> | string | null
    lastCommitDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    stars?: IntWithAggregatesFilter<"Project"> | number
    revivalMode?: EnumRevivalModeWithAggregatesFilter<"Project"> | $Enums.RevivalMode
  }

  export type AIAnalysisWhereInput = {
    AND?: AIAnalysisWhereInput | AIAnalysisWhereInput[]
    OR?: AIAnalysisWhereInput[]
    NOT?: AIAnalysisWhereInput | AIAnalysisWhereInput[]
    id?: StringFilter<"AIAnalysis"> | string
    projectId?: StringFilter<"AIAnalysis"> | string
    summary?: StringFilter<"AIAnalysis"> | string
    problemsDetected?: StringNullableListFilter<"AIAnalysis">
    revivalRoadmap?: StringNullableListFilter<"AIAnalysis">
    difficultyLevel?: EnumDifficultyLevelFilter<"AIAnalysis"> | $Enums.DifficultyLevel
    structureExplanation?: StringNullableFilter<"AIAnalysis"> | string | null
    stoppageReason?: StringNullableFilter<"AIAnalysis"> | string | null
    createdAt?: DateTimeFilter<"AIAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"AIAnalysis"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }

  export type AIAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    summary?: SortOrder
    problemsDetected?: SortOrder
    revivalRoadmap?: SortOrder
    difficultyLevel?: SortOrder
    structureExplanation?: SortOrderInput | SortOrder
    stoppageReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type AIAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: AIAnalysisWhereInput | AIAnalysisWhereInput[]
    OR?: AIAnalysisWhereInput[]
    NOT?: AIAnalysisWhereInput | AIAnalysisWhereInput[]
    summary?: StringFilter<"AIAnalysis"> | string
    problemsDetected?: StringNullableListFilter<"AIAnalysis">
    revivalRoadmap?: StringNullableListFilter<"AIAnalysis">
    difficultyLevel?: EnumDifficultyLevelFilter<"AIAnalysis"> | $Enums.DifficultyLevel
    structureExplanation?: StringNullableFilter<"AIAnalysis"> | string | null
    stoppageReason?: StringNullableFilter<"AIAnalysis"> | string | null
    createdAt?: DateTimeFilter<"AIAnalysis"> | Date | string
    updatedAt?: DateTimeFilter<"AIAnalysis"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
  }, "id" | "projectId">

  export type AIAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    summary?: SortOrder
    problemsDetected?: SortOrder
    revivalRoadmap?: SortOrder
    difficultyLevel?: SortOrder
    structureExplanation?: SortOrderInput | SortOrder
    stoppageReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIAnalysisCountOrderByAggregateInput
    _max?: AIAnalysisMaxOrderByAggregateInput
    _min?: AIAnalysisMinOrderByAggregateInput
  }

  export type AIAnalysisScalarWhereWithAggregatesInput = {
    AND?: AIAnalysisScalarWhereWithAggregatesInput | AIAnalysisScalarWhereWithAggregatesInput[]
    OR?: AIAnalysisScalarWhereWithAggregatesInput[]
    NOT?: AIAnalysisScalarWhereWithAggregatesInput | AIAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIAnalysis"> | string
    projectId?: StringWithAggregatesFilter<"AIAnalysis"> | string
    summary?: StringWithAggregatesFilter<"AIAnalysis"> | string
    problemsDetected?: StringNullableListFilter<"AIAnalysis">
    revivalRoadmap?: StringNullableListFilter<"AIAnalysis">
    difficultyLevel?: EnumDifficultyLevelWithAggregatesFilter<"AIAnalysis"> | $Enums.DifficultyLevel
    structureExplanation?: StringNullableWithAggregatesFilter<"AIAnalysis"> | string | null
    stoppageReason?: StringNullableWithAggregatesFilter<"AIAnalysis"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AIAnalysis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIAnalysis"> | Date | string
  }

  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    projectId?: StringFilter<"Request"> | string
    requesterId?: StringFilter<"Request"> | string
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    message?: StringFilter<"Request"> | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    revivalMode?: EnumRevivalModeNullableFilter<"Request"> | $Enums.RevivalMode | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    requester?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    requesterId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revivalMode?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    projectId?: StringFilter<"Request"> | string
    requesterId?: StringFilter<"Request"> | string
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    message?: StringFilter<"Request"> | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    revivalMode?: EnumRevivalModeNullableFilter<"Request"> | $Enums.RevivalMode | null
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    requester?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    requesterId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revivalMode?: SortOrderInput | SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    projectId?: StringWithAggregatesFilter<"Request"> | string
    requesterId?: StringWithAggregatesFilter<"Request"> | string
    type?: EnumRequestTypeWithAggregatesFilter<"Request"> | $Enums.RequestType
    message?: StringWithAggregatesFilter<"Request"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"Request"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    revivalMode?: EnumRevivalModeNullableWithAggregatesFilter<"Request"> | $Enums.RevivalMode | null
  }

  export type SupportTicketWhereInput = {
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    projectId?: StringFilter<"SupportTicket"> | string
    requestId?: StringFilter<"SupportTicket"> | string
    requesterId?: StringFilter<"SupportTicket"> | string
    message?: StringFilter<"SupportTicket"> | string
    status?: EnumTicketStatusFilter<"SupportTicket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"SupportTicket"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    requester?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SupportTicketOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    requestId?: SortOrder
    requesterId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    requester?: UserOrderByWithRelationInput
  }

  export type SupportTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportTicketWhereInput | SupportTicketWhereInput[]
    OR?: SupportTicketWhereInput[]
    NOT?: SupportTicketWhereInput | SupportTicketWhereInput[]
    projectId?: StringFilter<"SupportTicket"> | string
    requestId?: StringFilter<"SupportTicket"> | string
    requesterId?: StringFilter<"SupportTicket"> | string
    message?: StringFilter<"SupportTicket"> | string
    status?: EnumTicketStatusFilter<"SupportTicket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"SupportTicket"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    requester?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SupportTicketOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    requestId?: SortOrder
    requesterId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportTicketCountOrderByAggregateInput
    _max?: SupportTicketMaxOrderByAggregateInput
    _min?: SupportTicketMinOrderByAggregateInput
  }

  export type SupportTicketScalarWhereWithAggregatesInput = {
    AND?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    OR?: SupportTicketScalarWhereWithAggregatesInput[]
    NOT?: SupportTicketScalarWhereWithAggregatesInput | SupportTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupportTicket"> | string
    projectId?: StringWithAggregatesFilter<"SupportTicket"> | string
    requestId?: StringWithAggregatesFilter<"SupportTicket"> | string
    requesterId?: StringWithAggregatesFilter<"SupportTicket"> | string
    message?: StringWithAggregatesFilter<"SupportTicket"> | string
    status?: EnumTicketStatusWithAggregatesFilter<"SupportTicket"> | $Enums.TicketStatus
    createdAt?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupportTicket"> | Date | string
  }

  export type SavedProjectWhereInput = {
    AND?: SavedProjectWhereInput | SavedProjectWhereInput[]
    OR?: SavedProjectWhereInput[]
    NOT?: SavedProjectWhereInput | SavedProjectWhereInput[]
    id?: StringFilter<"SavedProject"> | string
    userId?: StringFilter<"SavedProject"> | string
    projectId?: StringFilter<"SavedProject"> | string
    createdAt?: DateTimeFilter<"SavedProject"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SavedProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SavedProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_projectId?: SavedProjectUserIdProjectIdCompoundUniqueInput
    AND?: SavedProjectWhereInput | SavedProjectWhereInput[]
    OR?: SavedProjectWhereInput[]
    NOT?: SavedProjectWhereInput | SavedProjectWhereInput[]
    userId?: StringFilter<"SavedProject"> | string
    projectId?: StringFilter<"SavedProject"> | string
    createdAt?: DateTimeFilter<"SavedProject"> | Date | string
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_projectId">

  export type SavedProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: SavedProjectCountOrderByAggregateInput
    _max?: SavedProjectMaxOrderByAggregateInput
    _min?: SavedProjectMinOrderByAggregateInput
  }

  export type SavedProjectScalarWhereWithAggregatesInput = {
    AND?: SavedProjectScalarWhereWithAggregatesInput | SavedProjectScalarWhereWithAggregatesInput[]
    OR?: SavedProjectScalarWhereWithAggregatesInput[]
    NOT?: SavedProjectScalarWhereWithAggregatesInput | SavedProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedProject"> | string
    userId?: StringWithAggregatesFilter<"SavedProject"> | string
    projectId?: StringWithAggregatesFilter<"SavedProject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedProject"> | Date | string
  }

  export type SavedGlobalRepoWhereInput = {
    AND?: SavedGlobalRepoWhereInput | SavedGlobalRepoWhereInput[]
    OR?: SavedGlobalRepoWhereInput[]
    NOT?: SavedGlobalRepoWhereInput | SavedGlobalRepoWhereInput[]
    id?: StringFilter<"SavedGlobalRepo"> | string
    userId?: StringFilter<"SavedGlobalRepo"> | string
    repoFullName?: StringFilter<"SavedGlobalRepo"> | string
    createdAt?: DateTimeFilter<"SavedGlobalRepo"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SavedGlobalRepoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SavedGlobalRepoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_repoFullName?: SavedGlobalRepoUserIdRepoFullNameCompoundUniqueInput
    AND?: SavedGlobalRepoWhereInput | SavedGlobalRepoWhereInput[]
    OR?: SavedGlobalRepoWhereInput[]
    NOT?: SavedGlobalRepoWhereInput | SavedGlobalRepoWhereInput[]
    userId?: StringFilter<"SavedGlobalRepo"> | string
    repoFullName?: StringFilter<"SavedGlobalRepo"> | string
    createdAt?: DateTimeFilter<"SavedGlobalRepo"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_repoFullName">

  export type SavedGlobalRepoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    createdAt?: SortOrder
    _count?: SavedGlobalRepoCountOrderByAggregateInput
    _max?: SavedGlobalRepoMaxOrderByAggregateInput
    _min?: SavedGlobalRepoMinOrderByAggregateInput
  }

  export type SavedGlobalRepoScalarWhereWithAggregatesInput = {
    AND?: SavedGlobalRepoScalarWhereWithAggregatesInput | SavedGlobalRepoScalarWhereWithAggregatesInput[]
    OR?: SavedGlobalRepoScalarWhereWithAggregatesInput[]
    NOT?: SavedGlobalRepoScalarWhereWithAggregatesInput | SavedGlobalRepoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedGlobalRepo"> | string
    userId?: StringWithAggregatesFilter<"SavedGlobalRepo"> | string
    repoFullName?: StringWithAggregatesFilter<"SavedGlobalRepo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedGlobalRepo"> | Date | string
  }

  export type RevivalWhereInput = {
    AND?: RevivalWhereInput | RevivalWhereInput[]
    OR?: RevivalWhereInput[]
    NOT?: RevivalWhereInput | RevivalWhereInput[]
    id?: StringFilter<"Revival"> | string
    userId?: StringFilter<"Revival"> | string
    repoFullName?: StringFilter<"Revival"> | string
    revivalType?: StringFilter<"Revival"> | string
    status?: StringFilter<"Revival"> | string
    forkUrl?: StringNullableFilter<"Revival"> | string | null
    startedAt?: DateTimeFilter<"Revival"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RevivalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    revivalType?: SortOrder
    status?: SortOrder
    forkUrl?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RevivalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_repoFullName?: RevivalUserIdRepoFullNameCompoundUniqueInput
    AND?: RevivalWhereInput | RevivalWhereInput[]
    OR?: RevivalWhereInput[]
    NOT?: RevivalWhereInput | RevivalWhereInput[]
    userId?: StringFilter<"Revival"> | string
    repoFullName?: StringFilter<"Revival"> | string
    revivalType?: StringFilter<"Revival"> | string
    status?: StringFilter<"Revival"> | string
    forkUrl?: StringNullableFilter<"Revival"> | string | null
    startedAt?: DateTimeFilter<"Revival"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId_repoFullName">

  export type RevivalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    revivalType?: SortOrder
    status?: SortOrder
    forkUrl?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    _count?: RevivalCountOrderByAggregateInput
    _max?: RevivalMaxOrderByAggregateInput
    _min?: RevivalMinOrderByAggregateInput
  }

  export type RevivalScalarWhereWithAggregatesInput = {
    AND?: RevivalScalarWhereWithAggregatesInput | RevivalScalarWhereWithAggregatesInput[]
    OR?: RevivalScalarWhereWithAggregatesInput[]
    NOT?: RevivalScalarWhereWithAggregatesInput | RevivalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Revival"> | string
    userId?: StringWithAggregatesFilter<"Revival"> | string
    repoFullName?: StringWithAggregatesFilter<"Revival"> | string
    revivalType?: StringWithAggregatesFilter<"Revival"> | string
    status?: StringWithAggregatesFilter<"Revival"> | string
    forkUrl?: StringNullableWithAggregatesFilter<"Revival"> | string | null
    startedAt?: DateTimeWithAggregatesFilter<"Revival"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    id?: string
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisCreateNestedOneWithoutProjectInput
    adoptedBy?: UserCreateNestedOneWithoutProjectsAdoptedInput
    owner: UserCreateNestedOneWithoutProjectsOwnedInput
    requests?: RequestCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    adoptedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedCreateNestedOneWithoutProjectInput
    requests?: RequestUncheckedCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectUncheckedCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUpdateOneWithoutProjectNestedInput
    adoptedBy?: UserUpdateOneWithoutProjectsAdoptedNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsOwnedNestedInput
    requests?: RequestUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    requests?: RequestUncheckedUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUncheckedUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    adoptedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
  }

  export type AIAnalysisCreateInput = {
    id?: string
    summary: string
    problemsDetected?: AIAnalysisCreateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisCreaterevivalRoadmapInput | string[]
    difficultyLevel?: $Enums.DifficultyLevel
    structureExplanation?: string | null
    stoppageReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutAnalysisInput
  }

  export type AIAnalysisUncheckedCreateInput = {
    id?: string
    projectId: string
    summary: string
    problemsDetected?: AIAnalysisCreateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisCreaterevivalRoadmapInput | string[]
    difficultyLevel?: $Enums.DifficultyLevel
    structureExplanation?: string | null
    stoppageReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemsDetected?: AIAnalysisUpdateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisUpdaterevivalRoadmapInput | string[]
    difficultyLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    structureExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    stoppageReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutAnalysisNestedInput
  }

  export type AIAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemsDetected?: AIAnalysisUpdateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisUpdaterevivalRoadmapInput | string[]
    difficultyLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    structureExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    stoppageReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIAnalysisCreateManyInput = {
    id?: string
    projectId: string
    summary: string
    problemsDetected?: AIAnalysisCreateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisCreaterevivalRoadmapInput | string[]
    difficultyLevel?: $Enums.DifficultyLevel
    structureExplanation?: string | null
    stoppageReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemsDetected?: AIAnalysisUpdateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisUpdaterevivalRoadmapInput | string[]
    difficultyLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    structureExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    stoppageReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemsDetected?: AIAnalysisUpdateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisUpdaterevivalRoadmapInput | string[]
    difficultyLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    structureExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    stoppageReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateInput = {
    id?: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
    project: ProjectCreateNestedOneWithoutRequestsInput
    requester: UserCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    projectId: string
    requesterId: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
    project?: ProjectUpdateOneRequiredWithoutRequestsNestedInput
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
  }

  export type RequestCreateManyInput = {
    id?: string
    projectId: string
    requesterId: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
  }

  export type SupportTicketCreateInput = {
    id?: string
    requestId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSupportTicketsInput
    requester: UserCreateNestedOneWithoutTicketsInput
  }

  export type SupportTicketUncheckedCreateInput = {
    id?: string
    projectId: string
    requestId: string
    requesterId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSupportTicketsNestedInput
    requester?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type SupportTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketCreateManyInput = {
    id?: string
    projectId: string
    requestId: string
    requesterId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutSavedInInput
    user: UserCreateNestedOneWithoutSavedProjectsInput
  }

  export type SavedProjectUncheckedCreateInput = {
    id?: string
    userId: string
    projectId: string
    createdAt?: Date | string
  }

  export type SavedProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSavedInNestedInput
    user?: UserUpdateOneRequiredWithoutSavedProjectsNestedInput
  }

  export type SavedProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProjectCreateManyInput = {
    id?: string
    userId: string
    projectId: string
    createdAt?: Date | string
  }

  export type SavedProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedGlobalRepoCreateInput = {
    id?: string
    repoFullName: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedGlobalReposInput
  }

  export type SavedGlobalRepoUncheckedCreateInput = {
    id?: string
    userId: string
    repoFullName: string
    createdAt?: Date | string
  }

  export type SavedGlobalRepoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedGlobalReposNestedInput
  }

  export type SavedGlobalRepoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedGlobalRepoCreateManyInput = {
    id?: string
    userId: string
    repoFullName: string
    createdAt?: Date | string
  }

  export type SavedGlobalRepoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedGlobalRepoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevivalCreateInput = {
    id?: string
    repoFullName: string
    revivalType: string
    status?: string
    forkUrl?: string | null
    startedAt?: Date | string
    user: UserCreateNestedOneWithoutRevivalsInput
  }

  export type RevivalUncheckedCreateInput = {
    id?: string
    userId: string
    repoFullName: string
    revivalType: string
    status?: string
    forkUrl?: string | null
    startedAt?: Date | string
  }

  export type RevivalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    revivalType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    forkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRevivalsNestedInput
  }

  export type RevivalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    revivalType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    forkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevivalCreateManyInput = {
    id?: string
    userId: string
    repoFullName: string
    revivalType: string
    status?: string
    forkUrl?: string | null
    startedAt?: Date | string
  }

  export type RevivalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    revivalType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    forkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevivalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    revivalType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    forkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type SavedProjectListRelationFilter = {
    every?: SavedProjectWhereInput
    some?: SavedProjectWhereInput
    none?: SavedProjectWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SupportTicketListRelationFilter = {
    every?: SupportTicketWhereInput
    some?: SupportTicketWhereInput
    none?: SupportTicketWhereInput
  }

  export type RevivalListRelationFilter = {
    every?: RevivalWhereInput
    some?: RevivalWhereInput
    none?: RevivalWhereInput
  }

  export type SavedGlobalRepoListRelationFilter = {
    every?: SavedGlobalRepoWhereInput
    some?: SavedGlobalRepoWhereInput
    none?: SavedGlobalRepoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevivalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedGlobalRepoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type EnumCompletionStageFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionStage | EnumCompletionStageFieldRefInput<$PrismaModel>
    in?: $Enums.CompletionStage[] | ListEnumCompletionStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompletionStage[] | ListEnumCompletionStageFieldRefInput<$PrismaModel>
    not?: NestedEnumCompletionStageFilter<$PrismaModel> | $Enums.CompletionStage
  }

  export type EnumAbandonmentReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.AbandonmentReason | EnumAbandonmentReasonFieldRefInput<$PrismaModel>
    in?: $Enums.AbandonmentReason[] | ListEnumAbandonmentReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.AbandonmentReason[] | ListEnumAbandonmentReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumAbandonmentReasonFilter<$PrismaModel> | $Enums.AbandonmentReason
  }

  export type EnumHelpTypeNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.HelpType[] | ListEnumHelpTypeFieldRefInput<$PrismaModel> | null
    has?: $Enums.HelpType | EnumHelpTypeFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.HelpType[] | ListEnumHelpTypeFieldRefInput<$PrismaModel>
    hasSome?: $Enums.HelpType[] | ListEnumHelpTypeFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRevivalModeFilter<$PrismaModel = never> = {
    equals?: $Enums.RevivalMode | EnumRevivalModeFieldRefInput<$PrismaModel>
    in?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel>
    not?: NestedEnumRevivalModeFilter<$PrismaModel> | $Enums.RevivalMode
  }

  export type AIAnalysisNullableRelationFilter = {
    is?: AIAnalysisWhereInput | null
    isNot?: AIAnalysisWhereInput | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    status?: SortOrder
    completionStage?: SortOrder
    abandonmentReason?: SortOrder
    helpNeeded?: SortOrder
    tags?: SortOrder
    lastRepoActivityAt?: SortOrder
    handoffWhat?: SortOrder
    handoffCompleted?: SortOrder
    handoffPending?: SortOrder
    handoffSetup?: SortOrder
    handoffKnownIssues?: SortOrder
    handoffNotes?: SortOrder
    isPriority?: SortOrder
    priorityExpiresAt?: SortOrder
    adoptedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    healthScore?: SortOrder
    language?: SortOrder
    lastCommitDate?: SortOrder
    stars?: SortOrder
    revivalMode?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    healthScore?: SortOrder
    stars?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    status?: SortOrder
    completionStage?: SortOrder
    abandonmentReason?: SortOrder
    lastRepoActivityAt?: SortOrder
    handoffWhat?: SortOrder
    handoffCompleted?: SortOrder
    handoffPending?: SortOrder
    handoffSetup?: SortOrder
    handoffKnownIssues?: SortOrder
    handoffNotes?: SortOrder
    isPriority?: SortOrder
    priorityExpiresAt?: SortOrder
    adoptedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    healthScore?: SortOrder
    language?: SortOrder
    lastCommitDate?: SortOrder
    stars?: SortOrder
    revivalMode?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    shortDescription?: SortOrder
    status?: SortOrder
    completionStage?: SortOrder
    abandonmentReason?: SortOrder
    lastRepoActivityAt?: SortOrder
    handoffWhat?: SortOrder
    handoffCompleted?: SortOrder
    handoffPending?: SortOrder
    handoffSetup?: SortOrder
    handoffKnownIssues?: SortOrder
    handoffNotes?: SortOrder
    isPriority?: SortOrder
    priorityExpiresAt?: SortOrder
    adoptedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    healthScore?: SortOrder
    language?: SortOrder
    lastCommitDate?: SortOrder
    stars?: SortOrder
    revivalMode?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    healthScore?: SortOrder
    stars?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type EnumCompletionStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionStage | EnumCompletionStageFieldRefInput<$PrismaModel>
    in?: $Enums.CompletionStage[] | ListEnumCompletionStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompletionStage[] | ListEnumCompletionStageFieldRefInput<$PrismaModel>
    not?: NestedEnumCompletionStageWithAggregatesFilter<$PrismaModel> | $Enums.CompletionStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompletionStageFilter<$PrismaModel>
    _max?: NestedEnumCompletionStageFilter<$PrismaModel>
  }

  export type EnumAbandonmentReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AbandonmentReason | EnumAbandonmentReasonFieldRefInput<$PrismaModel>
    in?: $Enums.AbandonmentReason[] | ListEnumAbandonmentReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.AbandonmentReason[] | ListEnumAbandonmentReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumAbandonmentReasonWithAggregatesFilter<$PrismaModel> | $Enums.AbandonmentReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAbandonmentReasonFilter<$PrismaModel>
    _max?: NestedEnumAbandonmentReasonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRevivalModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RevivalMode | EnumRevivalModeFieldRefInput<$PrismaModel>
    in?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel>
    not?: NestedEnumRevivalModeWithAggregatesFilter<$PrismaModel> | $Enums.RevivalMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRevivalModeFilter<$PrismaModel>
    _max?: NestedEnumRevivalModeFilter<$PrismaModel>
  }

  export type EnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type AIAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    summary?: SortOrder
    problemsDetected?: SortOrder
    revivalRoadmap?: SortOrder
    difficultyLevel?: SortOrder
    structureExplanation?: SortOrder
    stoppageReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    summary?: SortOrder
    difficultyLevel?: SortOrder
    structureExplanation?: SortOrder
    stoppageReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    summary?: SortOrder
    difficultyLevel?: SortOrder
    structureExplanation?: SortOrder
    stoppageReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type EnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type EnumRevivalModeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RevivalMode | EnumRevivalModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRevivalModeNullableFilter<$PrismaModel> | $Enums.RevivalMode | null
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    requesterId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revivalMode?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    requesterId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revivalMode?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    requesterId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    revivalMode?: SortOrder
  }

  export type EnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type EnumRevivalModeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RevivalMode | EnumRevivalModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRevivalModeNullableWithAggregatesFilter<$PrismaModel> | $Enums.RevivalMode | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRevivalModeNullableFilter<$PrismaModel>
    _max?: NestedEnumRevivalModeNullableFilter<$PrismaModel>
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type SupportTicketCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    requestId?: SortOrder
    requesterId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    requestId?: SortOrder
    requesterId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportTicketMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    requestId?: SortOrder
    requesterId?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type SavedProjectUserIdProjectIdCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type SavedProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedGlobalRepoUserIdRepoFullNameCompoundUniqueInput = {
    userId: string
    repoFullName: string
  }

  export type SavedGlobalRepoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedGlobalRepoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    createdAt?: SortOrder
  }

  export type SavedGlobalRepoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    createdAt?: SortOrder
  }

  export type RevivalUserIdRepoFullNameCompoundUniqueInput = {
    userId: string
    repoFullName: string
  }

  export type RevivalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    revivalType?: SortOrder
    status?: SortOrder
    forkUrl?: SortOrder
    startedAt?: SortOrder
  }

  export type RevivalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    revivalType?: SortOrder
    status?: SortOrder
    forkUrl?: SortOrder
    startedAt?: SortOrder
  }

  export type RevivalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    repoFullName?: SortOrder
    revivalType?: SortOrder
    status?: SortOrder
    forkUrl?: SortOrder
    startedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutAdoptedByInput = {
    create?: XOR<ProjectCreateWithoutAdoptedByInput, ProjectUncheckedCreateWithoutAdoptedByInput> | ProjectCreateWithoutAdoptedByInput[] | ProjectUncheckedCreateWithoutAdoptedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAdoptedByInput | ProjectCreateOrConnectWithoutAdoptedByInput[]
    createMany?: ProjectCreateManyAdoptedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<RequestCreateWithoutRequesterInput, RequestUncheckedCreateWithoutRequesterInput> | RequestCreateWithoutRequesterInput[] | RequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutRequesterInput | RequestCreateOrConnectWithoutRequesterInput[]
    createMany?: RequestCreateManyRequesterInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type SavedProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedProjectCreateWithoutUserInput, SavedProjectUncheckedCreateWithoutUserInput> | SavedProjectCreateWithoutUserInput[] | SavedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProjectCreateOrConnectWithoutUserInput | SavedProjectCreateOrConnectWithoutUserInput[]
    createMany?: SavedProjectCreateManyUserInputEnvelope
    connect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SupportTicketCreateNestedManyWithoutRequesterInput = {
    create?: XOR<SupportTicketCreateWithoutRequesterInput, SupportTicketUncheckedCreateWithoutRequesterInput> | SupportTicketCreateWithoutRequesterInput[] | SupportTicketUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutRequesterInput | SupportTicketCreateOrConnectWithoutRequesterInput[]
    createMany?: SupportTicketCreateManyRequesterInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type RevivalCreateNestedManyWithoutUserInput = {
    create?: XOR<RevivalCreateWithoutUserInput, RevivalUncheckedCreateWithoutUserInput> | RevivalCreateWithoutUserInput[] | RevivalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevivalCreateOrConnectWithoutUserInput | RevivalCreateOrConnectWithoutUserInput[]
    createMany?: RevivalCreateManyUserInputEnvelope
    connect?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
  }

  export type SavedGlobalRepoCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedGlobalRepoCreateWithoutUserInput, SavedGlobalRepoUncheckedCreateWithoutUserInput> | SavedGlobalRepoCreateWithoutUserInput[] | SavedGlobalRepoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedGlobalRepoCreateOrConnectWithoutUserInput | SavedGlobalRepoCreateOrConnectWithoutUserInput[]
    createMany?: SavedGlobalRepoCreateManyUserInputEnvelope
    connect?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutAdoptedByInput = {
    create?: XOR<ProjectCreateWithoutAdoptedByInput, ProjectUncheckedCreateWithoutAdoptedByInput> | ProjectCreateWithoutAdoptedByInput[] | ProjectUncheckedCreateWithoutAdoptedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAdoptedByInput | ProjectCreateOrConnectWithoutAdoptedByInput[]
    createMany?: ProjectCreateManyAdoptedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<RequestCreateWithoutRequesterInput, RequestUncheckedCreateWithoutRequesterInput> | RequestCreateWithoutRequesterInput[] | RequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutRequesterInput | RequestCreateOrConnectWithoutRequesterInput[]
    createMany?: RequestCreateManyRequesterInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type SavedProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedProjectCreateWithoutUserInput, SavedProjectUncheckedCreateWithoutUserInput> | SavedProjectCreateWithoutUserInput[] | SavedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProjectCreateOrConnectWithoutUserInput | SavedProjectCreateOrConnectWithoutUserInput[]
    createMany?: SavedProjectCreateManyUserInputEnvelope
    connect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SupportTicketUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<SupportTicketCreateWithoutRequesterInput, SupportTicketUncheckedCreateWithoutRequesterInput> | SupportTicketCreateWithoutRequesterInput[] | SupportTicketUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutRequesterInput | SupportTicketCreateOrConnectWithoutRequesterInput[]
    createMany?: SupportTicketCreateManyRequesterInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type RevivalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RevivalCreateWithoutUserInput, RevivalUncheckedCreateWithoutUserInput> | RevivalCreateWithoutUserInput[] | RevivalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevivalCreateOrConnectWithoutUserInput | RevivalCreateOrConnectWithoutUserInput[]
    createMany?: RevivalCreateManyUserInputEnvelope
    connect?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
  }

  export type SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedGlobalRepoCreateWithoutUserInput, SavedGlobalRepoUncheckedCreateWithoutUserInput> | SavedGlobalRepoCreateWithoutUserInput[] | SavedGlobalRepoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedGlobalRepoCreateOrConnectWithoutUserInput | SavedGlobalRepoCreateOrConnectWithoutUserInput[]
    createMany?: SavedGlobalRepoCreateManyUserInputEnvelope
    connect?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutAdoptedByNestedInput = {
    create?: XOR<ProjectCreateWithoutAdoptedByInput, ProjectUncheckedCreateWithoutAdoptedByInput> | ProjectCreateWithoutAdoptedByInput[] | ProjectUncheckedCreateWithoutAdoptedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAdoptedByInput | ProjectCreateOrConnectWithoutAdoptedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAdoptedByInput | ProjectUpsertWithWhereUniqueWithoutAdoptedByInput[]
    createMany?: ProjectCreateManyAdoptedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAdoptedByInput | ProjectUpdateWithWhereUniqueWithoutAdoptedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAdoptedByInput | ProjectUpdateManyWithWhereWithoutAdoptedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<RequestCreateWithoutRequesterInput, RequestUncheckedCreateWithoutRequesterInput> | RequestCreateWithoutRequesterInput[] | RequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutRequesterInput | RequestCreateOrConnectWithoutRequesterInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutRequesterInput | RequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: RequestCreateManyRequesterInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutRequesterInput | RequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutRequesterInput | RequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type SavedProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedProjectCreateWithoutUserInput, SavedProjectUncheckedCreateWithoutUserInput> | SavedProjectCreateWithoutUserInput[] | SavedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProjectCreateOrConnectWithoutUserInput | SavedProjectCreateOrConnectWithoutUserInput[]
    upsert?: SavedProjectUpsertWithWhereUniqueWithoutUserInput | SavedProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedProjectCreateManyUserInputEnvelope
    set?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    disconnect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    delete?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    connect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    update?: SavedProjectUpdateWithWhereUniqueWithoutUserInput | SavedProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedProjectUpdateManyWithWhereWithoutUserInput | SavedProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedProjectScalarWhereInput | SavedProjectScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SupportTicketUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<SupportTicketCreateWithoutRequesterInput, SupportTicketUncheckedCreateWithoutRequesterInput> | SupportTicketCreateWithoutRequesterInput[] | SupportTicketUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutRequesterInput | SupportTicketCreateOrConnectWithoutRequesterInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutRequesterInput | SupportTicketUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: SupportTicketCreateManyRequesterInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutRequesterInput | SupportTicketUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutRequesterInput | SupportTicketUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type RevivalUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevivalCreateWithoutUserInput, RevivalUncheckedCreateWithoutUserInput> | RevivalCreateWithoutUserInput[] | RevivalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevivalCreateOrConnectWithoutUserInput | RevivalCreateOrConnectWithoutUserInput[]
    upsert?: RevivalUpsertWithWhereUniqueWithoutUserInput | RevivalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevivalCreateManyUserInputEnvelope
    set?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
    disconnect?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
    delete?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
    connect?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
    update?: RevivalUpdateWithWhereUniqueWithoutUserInput | RevivalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevivalUpdateManyWithWhereWithoutUserInput | RevivalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevivalScalarWhereInput | RevivalScalarWhereInput[]
  }

  export type SavedGlobalRepoUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedGlobalRepoCreateWithoutUserInput, SavedGlobalRepoUncheckedCreateWithoutUserInput> | SavedGlobalRepoCreateWithoutUserInput[] | SavedGlobalRepoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedGlobalRepoCreateOrConnectWithoutUserInput | SavedGlobalRepoCreateOrConnectWithoutUserInput[]
    upsert?: SavedGlobalRepoUpsertWithWhereUniqueWithoutUserInput | SavedGlobalRepoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedGlobalRepoCreateManyUserInputEnvelope
    set?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
    disconnect?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
    delete?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
    connect?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
    update?: SavedGlobalRepoUpdateWithWhereUniqueWithoutUserInput | SavedGlobalRepoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedGlobalRepoUpdateManyWithWhereWithoutUserInput | SavedGlobalRepoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedGlobalRepoScalarWhereInput | SavedGlobalRepoScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput = {
    create?: XOR<ProjectCreateWithoutAdoptedByInput, ProjectUncheckedCreateWithoutAdoptedByInput> | ProjectCreateWithoutAdoptedByInput[] | ProjectUncheckedCreateWithoutAdoptedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAdoptedByInput | ProjectCreateOrConnectWithoutAdoptedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAdoptedByInput | ProjectUpsertWithWhereUniqueWithoutAdoptedByInput[]
    createMany?: ProjectCreateManyAdoptedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAdoptedByInput | ProjectUpdateWithWhereUniqueWithoutAdoptedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAdoptedByInput | ProjectUpdateManyWithWhereWithoutAdoptedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<RequestCreateWithoutRequesterInput, RequestUncheckedCreateWithoutRequesterInput> | RequestCreateWithoutRequesterInput[] | RequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutRequesterInput | RequestCreateOrConnectWithoutRequesterInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutRequesterInput | RequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: RequestCreateManyRequesterInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutRequesterInput | RequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutRequesterInput | RequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type SavedProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedProjectCreateWithoutUserInput, SavedProjectUncheckedCreateWithoutUserInput> | SavedProjectCreateWithoutUserInput[] | SavedProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedProjectCreateOrConnectWithoutUserInput | SavedProjectCreateOrConnectWithoutUserInput[]
    upsert?: SavedProjectUpsertWithWhereUniqueWithoutUserInput | SavedProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedProjectCreateManyUserInputEnvelope
    set?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    disconnect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    delete?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    connect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    update?: SavedProjectUpdateWithWhereUniqueWithoutUserInput | SavedProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedProjectUpdateManyWithWhereWithoutUserInput | SavedProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedProjectScalarWhereInput | SavedProjectScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<SupportTicketCreateWithoutRequesterInput, SupportTicketUncheckedCreateWithoutRequesterInput> | SupportTicketCreateWithoutRequesterInput[] | SupportTicketUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutRequesterInput | SupportTicketCreateOrConnectWithoutRequesterInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutRequesterInput | SupportTicketUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: SupportTicketCreateManyRequesterInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutRequesterInput | SupportTicketUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutRequesterInput | SupportTicketUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type RevivalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevivalCreateWithoutUserInput, RevivalUncheckedCreateWithoutUserInput> | RevivalCreateWithoutUserInput[] | RevivalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevivalCreateOrConnectWithoutUserInput | RevivalCreateOrConnectWithoutUserInput[]
    upsert?: RevivalUpsertWithWhereUniqueWithoutUserInput | RevivalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevivalCreateManyUserInputEnvelope
    set?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
    disconnect?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
    delete?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
    connect?: RevivalWhereUniqueInput | RevivalWhereUniqueInput[]
    update?: RevivalUpdateWithWhereUniqueWithoutUserInput | RevivalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevivalUpdateManyWithWhereWithoutUserInput | RevivalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevivalScalarWhereInput | RevivalScalarWhereInput[]
  }

  export type SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedGlobalRepoCreateWithoutUserInput, SavedGlobalRepoUncheckedCreateWithoutUserInput> | SavedGlobalRepoCreateWithoutUserInput[] | SavedGlobalRepoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedGlobalRepoCreateOrConnectWithoutUserInput | SavedGlobalRepoCreateOrConnectWithoutUserInput[]
    upsert?: SavedGlobalRepoUpsertWithWhereUniqueWithoutUserInput | SavedGlobalRepoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedGlobalRepoCreateManyUserInputEnvelope
    set?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
    disconnect?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
    delete?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
    connect?: SavedGlobalRepoWhereUniqueInput | SavedGlobalRepoWhereUniqueInput[]
    update?: SavedGlobalRepoUpdateWithWhereUniqueWithoutUserInput | SavedGlobalRepoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedGlobalRepoUpdateManyWithWhereWithoutUserInput | SavedGlobalRepoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedGlobalRepoScalarWhereInput | SavedGlobalRepoScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ProjectCreatehelpNeededInput = {
    set: $Enums.HelpType[]
  }

  export type ProjectCreatetagsInput = {
    set: string[]
  }

  export type AIAnalysisCreateNestedOneWithoutProjectInput = {
    create?: XOR<AIAnalysisCreateWithoutProjectInput, AIAnalysisUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AIAnalysisCreateOrConnectWithoutProjectInput
    connect?: AIAnalysisWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsAdoptedInput = {
    create?: XOR<UserCreateWithoutProjectsAdoptedInput, UserUncheckedCreateWithoutProjectsAdoptedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsAdoptedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsOwnedInput = {
    create?: XOR<UserCreateWithoutProjectsOwnedInput, UserUncheckedCreateWithoutProjectsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsOwnedInput
    connect?: UserWhereUniqueInput
  }

  export type RequestCreateNestedManyWithoutProjectInput = {
    create?: XOR<RequestCreateWithoutProjectInput, RequestUncheckedCreateWithoutProjectInput> | RequestCreateWithoutProjectInput[] | RequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutProjectInput | RequestCreateOrConnectWithoutProjectInput[]
    createMany?: RequestCreateManyProjectInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type SavedProjectCreateNestedManyWithoutProjectInput = {
    create?: XOR<SavedProjectCreateWithoutProjectInput, SavedProjectUncheckedCreateWithoutProjectInput> | SavedProjectCreateWithoutProjectInput[] | SavedProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SavedProjectCreateOrConnectWithoutProjectInput | SavedProjectCreateOrConnectWithoutProjectInput[]
    createMany?: SavedProjectCreateManyProjectInputEnvelope
    connect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
  }

  export type SupportTicketCreateNestedManyWithoutProjectInput = {
    create?: XOR<SupportTicketCreateWithoutProjectInput, SupportTicketUncheckedCreateWithoutProjectInput> | SupportTicketCreateWithoutProjectInput[] | SupportTicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutProjectInput | SupportTicketCreateOrConnectWithoutProjectInput[]
    createMany?: SupportTicketCreateManyProjectInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type AIAnalysisUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<AIAnalysisCreateWithoutProjectInput, AIAnalysisUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AIAnalysisCreateOrConnectWithoutProjectInput
    connect?: AIAnalysisWhereUniqueInput
  }

  export type RequestUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<RequestCreateWithoutProjectInput, RequestUncheckedCreateWithoutProjectInput> | RequestCreateWithoutProjectInput[] | RequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutProjectInput | RequestCreateOrConnectWithoutProjectInput[]
    createMany?: RequestCreateManyProjectInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type SavedProjectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SavedProjectCreateWithoutProjectInput, SavedProjectUncheckedCreateWithoutProjectInput> | SavedProjectCreateWithoutProjectInput[] | SavedProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SavedProjectCreateOrConnectWithoutProjectInput | SavedProjectCreateOrConnectWithoutProjectInput[]
    createMany?: SavedProjectCreateManyProjectInputEnvelope
    connect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
  }

  export type SupportTicketUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SupportTicketCreateWithoutProjectInput, SupportTicketUncheckedCreateWithoutProjectInput> | SupportTicketCreateWithoutProjectInput[] | SupportTicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutProjectInput | SupportTicketCreateOrConnectWithoutProjectInput[]
    createMany?: SupportTicketCreateManyProjectInputEnvelope
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type EnumCompletionStageFieldUpdateOperationsInput = {
    set?: $Enums.CompletionStage
  }

  export type EnumAbandonmentReasonFieldUpdateOperationsInput = {
    set?: $Enums.AbandonmentReason
  }

  export type ProjectUpdatehelpNeededInput = {
    set?: $Enums.HelpType[]
    push?: $Enums.HelpType | $Enums.HelpType[]
  }

  export type ProjectUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRevivalModeFieldUpdateOperationsInput = {
    set?: $Enums.RevivalMode
  }

  export type AIAnalysisUpdateOneWithoutProjectNestedInput = {
    create?: XOR<AIAnalysisCreateWithoutProjectInput, AIAnalysisUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AIAnalysisCreateOrConnectWithoutProjectInput
    upsert?: AIAnalysisUpsertWithoutProjectInput
    disconnect?: AIAnalysisWhereInput | boolean
    delete?: AIAnalysisWhereInput | boolean
    connect?: AIAnalysisWhereUniqueInput
    update?: XOR<XOR<AIAnalysisUpdateToOneWithWhereWithoutProjectInput, AIAnalysisUpdateWithoutProjectInput>, AIAnalysisUncheckedUpdateWithoutProjectInput>
  }

  export type UserUpdateOneWithoutProjectsAdoptedNestedInput = {
    create?: XOR<UserCreateWithoutProjectsAdoptedInput, UserUncheckedCreateWithoutProjectsAdoptedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsAdoptedInput
    upsert?: UserUpsertWithoutProjectsAdoptedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsAdoptedInput, UserUpdateWithoutProjectsAdoptedInput>, UserUncheckedUpdateWithoutProjectsAdoptedInput>
  }

  export type UserUpdateOneRequiredWithoutProjectsOwnedNestedInput = {
    create?: XOR<UserCreateWithoutProjectsOwnedInput, UserUncheckedCreateWithoutProjectsOwnedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsOwnedInput
    upsert?: UserUpsertWithoutProjectsOwnedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsOwnedInput, UserUpdateWithoutProjectsOwnedInput>, UserUncheckedUpdateWithoutProjectsOwnedInput>
  }

  export type RequestUpdateManyWithoutProjectNestedInput = {
    create?: XOR<RequestCreateWithoutProjectInput, RequestUncheckedCreateWithoutProjectInput> | RequestCreateWithoutProjectInput[] | RequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutProjectInput | RequestCreateOrConnectWithoutProjectInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutProjectInput | RequestUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: RequestCreateManyProjectInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutProjectInput | RequestUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutProjectInput | RequestUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type SavedProjectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SavedProjectCreateWithoutProjectInput, SavedProjectUncheckedCreateWithoutProjectInput> | SavedProjectCreateWithoutProjectInput[] | SavedProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SavedProjectCreateOrConnectWithoutProjectInput | SavedProjectCreateOrConnectWithoutProjectInput[]
    upsert?: SavedProjectUpsertWithWhereUniqueWithoutProjectInput | SavedProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SavedProjectCreateManyProjectInputEnvelope
    set?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    disconnect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    delete?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    connect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    update?: SavedProjectUpdateWithWhereUniqueWithoutProjectInput | SavedProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SavedProjectUpdateManyWithWhereWithoutProjectInput | SavedProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SavedProjectScalarWhereInput | SavedProjectScalarWhereInput[]
  }

  export type SupportTicketUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SupportTicketCreateWithoutProjectInput, SupportTicketUncheckedCreateWithoutProjectInput> | SupportTicketCreateWithoutProjectInput[] | SupportTicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutProjectInput | SupportTicketCreateOrConnectWithoutProjectInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutProjectInput | SupportTicketUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SupportTicketCreateManyProjectInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutProjectInput | SupportTicketUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutProjectInput | SupportTicketUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type AIAnalysisUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<AIAnalysisCreateWithoutProjectInput, AIAnalysisUncheckedCreateWithoutProjectInput>
    connectOrCreate?: AIAnalysisCreateOrConnectWithoutProjectInput
    upsert?: AIAnalysisUpsertWithoutProjectInput
    disconnect?: AIAnalysisWhereInput | boolean
    delete?: AIAnalysisWhereInput | boolean
    connect?: AIAnalysisWhereUniqueInput
    update?: XOR<XOR<AIAnalysisUpdateToOneWithWhereWithoutProjectInput, AIAnalysisUpdateWithoutProjectInput>, AIAnalysisUncheckedUpdateWithoutProjectInput>
  }

  export type RequestUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<RequestCreateWithoutProjectInput, RequestUncheckedCreateWithoutProjectInput> | RequestCreateWithoutProjectInput[] | RequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutProjectInput | RequestCreateOrConnectWithoutProjectInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutProjectInput | RequestUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: RequestCreateManyProjectInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutProjectInput | RequestUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutProjectInput | RequestUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type SavedProjectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SavedProjectCreateWithoutProjectInput, SavedProjectUncheckedCreateWithoutProjectInput> | SavedProjectCreateWithoutProjectInput[] | SavedProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SavedProjectCreateOrConnectWithoutProjectInput | SavedProjectCreateOrConnectWithoutProjectInput[]
    upsert?: SavedProjectUpsertWithWhereUniqueWithoutProjectInput | SavedProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SavedProjectCreateManyProjectInputEnvelope
    set?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    disconnect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    delete?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    connect?: SavedProjectWhereUniqueInput | SavedProjectWhereUniqueInput[]
    update?: SavedProjectUpdateWithWhereUniqueWithoutProjectInput | SavedProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SavedProjectUpdateManyWithWhereWithoutProjectInput | SavedProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SavedProjectScalarWhereInput | SavedProjectScalarWhereInput[]
  }

  export type SupportTicketUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SupportTicketCreateWithoutProjectInput, SupportTicketUncheckedCreateWithoutProjectInput> | SupportTicketCreateWithoutProjectInput[] | SupportTicketUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SupportTicketCreateOrConnectWithoutProjectInput | SupportTicketCreateOrConnectWithoutProjectInput[]
    upsert?: SupportTicketUpsertWithWhereUniqueWithoutProjectInput | SupportTicketUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SupportTicketCreateManyProjectInputEnvelope
    set?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    disconnect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    delete?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    connect?: SupportTicketWhereUniqueInput | SupportTicketWhereUniqueInput[]
    update?: SupportTicketUpdateWithWhereUniqueWithoutProjectInput | SupportTicketUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SupportTicketUpdateManyWithWhereWithoutProjectInput | SupportTicketUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
  }

  export type AIAnalysisCreateproblemsDetectedInput = {
    set: string[]
  }

  export type AIAnalysisCreaterevivalRoadmapInput = {
    set: string[]
  }

  export type ProjectCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<ProjectCreateWithoutAnalysisInput, ProjectUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAnalysisInput
    connect?: ProjectWhereUniqueInput
  }

  export type AIAnalysisUpdateproblemsDetectedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AIAnalysisUpdaterevivalRoadmapInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel
  }

  export type ProjectUpdateOneRequiredWithoutAnalysisNestedInput = {
    create?: XOR<ProjectCreateWithoutAnalysisInput, ProjectUncheckedCreateWithoutAnalysisInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAnalysisInput
    upsert?: ProjectUpsertWithoutAnalysisInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAnalysisInput, ProjectUpdateWithoutAnalysisInput>, ProjectUncheckedUpdateWithoutAnalysisInput>
  }

  export type ProjectCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ProjectCreateWithoutRequestsInput, ProjectUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRequestsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestTypeFieldUpdateOperationsInput = {
    set?: $Enums.RequestType
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableEnumRevivalModeFieldUpdateOperationsInput = {
    set?: $Enums.RevivalMode | null
  }

  export type ProjectUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<ProjectCreateWithoutRequestsInput, ProjectUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRequestsInput
    upsert?: ProjectUpsertWithoutRequestsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutRequestsInput, ProjectUpdateWithoutRequestsInput>, ProjectUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type ProjectCreateNestedOneWithoutSupportTicketsInput = {
    create?: XOR<ProjectCreateWithoutSupportTicketsInput, ProjectUncheckedCreateWithoutSupportTicketsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSupportTicketsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type ProjectUpdateOneRequiredWithoutSupportTicketsNestedInput = {
    create?: XOR<ProjectCreateWithoutSupportTicketsInput, ProjectUncheckedCreateWithoutSupportTicketsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSupportTicketsInput
    upsert?: ProjectUpsertWithoutSupportTicketsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSupportTicketsInput, ProjectUpdateWithoutSupportTicketsInput>, ProjectUncheckedUpdateWithoutSupportTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type ProjectCreateNestedOneWithoutSavedInInput = {
    create?: XOR<ProjectCreateWithoutSavedInInput, ProjectUncheckedCreateWithoutSavedInInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSavedInInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSavedProjectsInput = {
    create?: XOR<UserCreateWithoutSavedProjectsInput, UserUncheckedCreateWithoutSavedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutSavedInNestedInput = {
    create?: XOR<ProjectCreateWithoutSavedInInput, ProjectUncheckedCreateWithoutSavedInInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSavedInInput
    upsert?: ProjectUpsertWithoutSavedInInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSavedInInput, ProjectUpdateWithoutSavedInInput>, ProjectUncheckedUpdateWithoutSavedInInput>
  }

  export type UserUpdateOneRequiredWithoutSavedProjectsNestedInput = {
    create?: XOR<UserCreateWithoutSavedProjectsInput, UserUncheckedCreateWithoutSavedProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedProjectsInput
    upsert?: UserUpsertWithoutSavedProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedProjectsInput, UserUpdateWithoutSavedProjectsInput>, UserUncheckedUpdateWithoutSavedProjectsInput>
  }

  export type UserCreateNestedOneWithoutSavedGlobalReposInput = {
    create?: XOR<UserCreateWithoutSavedGlobalReposInput, UserUncheckedCreateWithoutSavedGlobalReposInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedGlobalReposInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedGlobalReposNestedInput = {
    create?: XOR<UserCreateWithoutSavedGlobalReposInput, UserUncheckedCreateWithoutSavedGlobalReposInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedGlobalReposInput
    upsert?: UserUpsertWithoutSavedGlobalReposInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedGlobalReposInput, UserUpdateWithoutSavedGlobalReposInput>, UserUncheckedUpdateWithoutSavedGlobalReposInput>
  }

  export type UserCreateNestedOneWithoutRevivalsInput = {
    create?: XOR<UserCreateWithoutRevivalsInput, UserUncheckedCreateWithoutRevivalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevivalsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRevivalsNestedInput = {
    create?: XOR<UserCreateWithoutRevivalsInput, UserUncheckedCreateWithoutRevivalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevivalsInput
    upsert?: UserUpsertWithoutRevivalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRevivalsInput, UserUpdateWithoutRevivalsInput>, UserUncheckedUpdateWithoutRevivalsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumCompletionStageFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionStage | EnumCompletionStageFieldRefInput<$PrismaModel>
    in?: $Enums.CompletionStage[] | ListEnumCompletionStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompletionStage[] | ListEnumCompletionStageFieldRefInput<$PrismaModel>
    not?: NestedEnumCompletionStageFilter<$PrismaModel> | $Enums.CompletionStage
  }

  export type NestedEnumAbandonmentReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.AbandonmentReason | EnumAbandonmentReasonFieldRefInput<$PrismaModel>
    in?: $Enums.AbandonmentReason[] | ListEnumAbandonmentReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.AbandonmentReason[] | ListEnumAbandonmentReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumAbandonmentReasonFilter<$PrismaModel> | $Enums.AbandonmentReason
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRevivalModeFilter<$PrismaModel = never> = {
    equals?: $Enums.RevivalMode | EnumRevivalModeFieldRefInput<$PrismaModel>
    in?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel>
    not?: NestedEnumRevivalModeFilter<$PrismaModel> | $Enums.RevivalMode
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumCompletionStageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CompletionStage | EnumCompletionStageFieldRefInput<$PrismaModel>
    in?: $Enums.CompletionStage[] | ListEnumCompletionStageFieldRefInput<$PrismaModel>
    notIn?: $Enums.CompletionStage[] | ListEnumCompletionStageFieldRefInput<$PrismaModel>
    not?: NestedEnumCompletionStageWithAggregatesFilter<$PrismaModel> | $Enums.CompletionStage
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCompletionStageFilter<$PrismaModel>
    _max?: NestedEnumCompletionStageFilter<$PrismaModel>
  }

  export type NestedEnumAbandonmentReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AbandonmentReason | EnumAbandonmentReasonFieldRefInput<$PrismaModel>
    in?: $Enums.AbandonmentReason[] | ListEnumAbandonmentReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.AbandonmentReason[] | ListEnumAbandonmentReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumAbandonmentReasonWithAggregatesFilter<$PrismaModel> | $Enums.AbandonmentReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAbandonmentReasonFilter<$PrismaModel>
    _max?: NestedEnumAbandonmentReasonFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRevivalModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RevivalMode | EnumRevivalModeFieldRefInput<$PrismaModel>
    in?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel>
    not?: NestedEnumRevivalModeWithAggregatesFilter<$PrismaModel> | $Enums.RevivalMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRevivalModeFilter<$PrismaModel>
    _max?: NestedEnumRevivalModeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type NestedEnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRevivalModeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RevivalMode | EnumRevivalModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRevivalModeNullableFilter<$PrismaModel> | $Enums.RevivalMode | null
  }

  export type NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumRevivalModeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RevivalMode | EnumRevivalModeFieldRefInput<$PrismaModel> | null
    in?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RevivalMode[] | ListEnumRevivalModeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRevivalModeNullableWithAggregatesFilter<$PrismaModel> | $Enums.RevivalMode | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRevivalModeNullableFilter<$PrismaModel>
    _max?: NestedEnumRevivalModeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutAdoptedByInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisCreateNestedOneWithoutProjectInput
    owner: UserCreateNestedOneWithoutProjectsOwnedInput
    requests?: RequestCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAdoptedByInput = {
    id?: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedCreateNestedOneWithoutProjectInput
    requests?: RequestUncheckedCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectUncheckedCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAdoptedByInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAdoptedByInput, ProjectUncheckedCreateWithoutAdoptedByInput>
  }

  export type ProjectCreateManyAdoptedByInputEnvelope = {
    data: ProjectCreateManyAdoptedByInput | ProjectCreateManyAdoptedByInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisCreateNestedOneWithoutProjectInput
    adoptedBy?: UserCreateNestedOneWithoutProjectsAdoptedInput
    requests?: RequestCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    adoptedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedCreateNestedOneWithoutProjectInput
    requests?: RequestUncheckedCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectUncheckedCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutRequesterInput = {
    id?: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
    project: ProjectCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutRequesterInput = {
    id?: string
    projectId: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
  }

  export type RequestCreateOrConnectWithoutRequesterInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutRequesterInput, RequestUncheckedCreateWithoutRequesterInput>
  }

  export type RequestCreateManyRequesterInputEnvelope = {
    data: RequestCreateManyRequesterInput | RequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type SavedProjectCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutSavedInInput
  }

  export type SavedProjectUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
  }

  export type SavedProjectCreateOrConnectWithoutUserInput = {
    where: SavedProjectWhereUniqueInput
    create: XOR<SavedProjectCreateWithoutUserInput, SavedProjectUncheckedCreateWithoutUserInput>
  }

  export type SavedProjectCreateManyUserInputEnvelope = {
    data: SavedProjectCreateManyUserInput | SavedProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SupportTicketCreateWithoutRequesterInput = {
    id?: string
    requestId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutSupportTicketsInput
  }

  export type SupportTicketUncheckedCreateWithoutRequesterInput = {
    id?: string
    projectId: string
    requestId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportTicketCreateOrConnectWithoutRequesterInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutRequesterInput, SupportTicketUncheckedCreateWithoutRequesterInput>
  }

  export type SupportTicketCreateManyRequesterInputEnvelope = {
    data: SupportTicketCreateManyRequesterInput | SupportTicketCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type RevivalCreateWithoutUserInput = {
    id?: string
    repoFullName: string
    revivalType: string
    status?: string
    forkUrl?: string | null
    startedAt?: Date | string
  }

  export type RevivalUncheckedCreateWithoutUserInput = {
    id?: string
    repoFullName: string
    revivalType: string
    status?: string
    forkUrl?: string | null
    startedAt?: Date | string
  }

  export type RevivalCreateOrConnectWithoutUserInput = {
    where: RevivalWhereUniqueInput
    create: XOR<RevivalCreateWithoutUserInput, RevivalUncheckedCreateWithoutUserInput>
  }

  export type RevivalCreateManyUserInputEnvelope = {
    data: RevivalCreateManyUserInput | RevivalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SavedGlobalRepoCreateWithoutUserInput = {
    id?: string
    repoFullName: string
    createdAt?: Date | string
  }

  export type SavedGlobalRepoUncheckedCreateWithoutUserInput = {
    id?: string
    repoFullName: string
    createdAt?: Date | string
  }

  export type SavedGlobalRepoCreateOrConnectWithoutUserInput = {
    where: SavedGlobalRepoWhereUniqueInput
    create: XOR<SavedGlobalRepoCreateWithoutUserInput, SavedGlobalRepoUncheckedCreateWithoutUserInput>
  }

  export type SavedGlobalRepoCreateManyUserInputEnvelope = {
    data: SavedGlobalRepoCreateManyUserInput | SavedGlobalRepoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type ProjectUpsertWithWhereUniqueWithoutAdoptedByInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutAdoptedByInput, ProjectUncheckedUpdateWithoutAdoptedByInput>
    create: XOR<ProjectCreateWithoutAdoptedByInput, ProjectUncheckedCreateWithoutAdoptedByInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutAdoptedByInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutAdoptedByInput, ProjectUncheckedUpdateWithoutAdoptedByInput>
  }

  export type ProjectUpdateManyWithWhereWithoutAdoptedByInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutAdoptedByInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    repoUrl?: StringFilter<"Project"> | string
    repoFullName?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    shortDescription?: StringFilter<"Project"> | string
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFilter<"Project"> | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFilter<"Project"> | $Enums.AbandonmentReason
    helpNeeded?: EnumHelpTypeNullableListFilter<"Project">
    tags?: StringNullableListFilter<"Project">
    lastRepoActivityAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    handoffWhat?: StringNullableFilter<"Project"> | string | null
    handoffCompleted?: StringNullableFilter<"Project"> | string | null
    handoffPending?: StringNullableFilter<"Project"> | string | null
    handoffSetup?: StringNullableFilter<"Project"> | string | null
    handoffKnownIssues?: StringNullableFilter<"Project"> | string | null
    handoffNotes?: StringNullableFilter<"Project"> | string | null
    isPriority?: BoolFilter<"Project"> | boolean
    priorityExpiresAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    adoptedById?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    healthScore?: IntFilter<"Project"> | number
    language?: StringNullableFilter<"Project"> | string | null
    lastCommitDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    stars?: IntFilter<"Project"> | number
    revivalMode?: EnumRevivalModeFilter<"Project"> | $Enums.RevivalMode
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutRequesterInput, RequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<RequestCreateWithoutRequesterInput, RequestUncheckedCreateWithoutRequesterInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutRequesterInput, RequestUncheckedUpdateWithoutRequesterInput>
  }

  export type RequestUpdateManyWithWhereWithoutRequesterInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    projectId?: StringFilter<"Request"> | string
    requesterId?: StringFilter<"Request"> | string
    type?: EnumRequestTypeFilter<"Request"> | $Enums.RequestType
    message?: StringFilter<"Request"> | string
    status?: EnumRequestStatusFilter<"Request"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    revivalMode?: EnumRevivalModeNullableFilter<"Request"> | $Enums.RevivalMode | null
  }

  export type SavedProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedProjectWhereUniqueInput
    update: XOR<SavedProjectUpdateWithoutUserInput, SavedProjectUncheckedUpdateWithoutUserInput>
    create: XOR<SavedProjectCreateWithoutUserInput, SavedProjectUncheckedCreateWithoutUserInput>
  }

  export type SavedProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedProjectWhereUniqueInput
    data: XOR<SavedProjectUpdateWithoutUserInput, SavedProjectUncheckedUpdateWithoutUserInput>
  }

  export type SavedProjectUpdateManyWithWhereWithoutUserInput = {
    where: SavedProjectScalarWhereInput
    data: XOR<SavedProjectUpdateManyMutationInput, SavedProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedProjectScalarWhereInput = {
    AND?: SavedProjectScalarWhereInput | SavedProjectScalarWhereInput[]
    OR?: SavedProjectScalarWhereInput[]
    NOT?: SavedProjectScalarWhereInput | SavedProjectScalarWhereInput[]
    id?: StringFilter<"SavedProject"> | string
    userId?: StringFilter<"SavedProject"> | string
    projectId?: StringFilter<"SavedProject"> | string
    createdAt?: DateTimeFilter<"SavedProject"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type SupportTicketUpsertWithWhereUniqueWithoutRequesterInput = {
    where: SupportTicketWhereUniqueInput
    update: XOR<SupportTicketUpdateWithoutRequesterInput, SupportTicketUncheckedUpdateWithoutRequesterInput>
    create: XOR<SupportTicketCreateWithoutRequesterInput, SupportTicketUncheckedCreateWithoutRequesterInput>
  }

  export type SupportTicketUpdateWithWhereUniqueWithoutRequesterInput = {
    where: SupportTicketWhereUniqueInput
    data: XOR<SupportTicketUpdateWithoutRequesterInput, SupportTicketUncheckedUpdateWithoutRequesterInput>
  }

  export type SupportTicketUpdateManyWithWhereWithoutRequesterInput = {
    where: SupportTicketScalarWhereInput
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyWithoutRequesterInput>
  }

  export type SupportTicketScalarWhereInput = {
    AND?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
    OR?: SupportTicketScalarWhereInput[]
    NOT?: SupportTicketScalarWhereInput | SupportTicketScalarWhereInput[]
    id?: StringFilter<"SupportTicket"> | string
    projectId?: StringFilter<"SupportTicket"> | string
    requestId?: StringFilter<"SupportTicket"> | string
    requesterId?: StringFilter<"SupportTicket"> | string
    message?: StringFilter<"SupportTicket"> | string
    status?: EnumTicketStatusFilter<"SupportTicket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"SupportTicket"> | Date | string
    updatedAt?: DateTimeFilter<"SupportTicket"> | Date | string
  }

  export type RevivalUpsertWithWhereUniqueWithoutUserInput = {
    where: RevivalWhereUniqueInput
    update: XOR<RevivalUpdateWithoutUserInput, RevivalUncheckedUpdateWithoutUserInput>
    create: XOR<RevivalCreateWithoutUserInput, RevivalUncheckedCreateWithoutUserInput>
  }

  export type RevivalUpdateWithWhereUniqueWithoutUserInput = {
    where: RevivalWhereUniqueInput
    data: XOR<RevivalUpdateWithoutUserInput, RevivalUncheckedUpdateWithoutUserInput>
  }

  export type RevivalUpdateManyWithWhereWithoutUserInput = {
    where: RevivalScalarWhereInput
    data: XOR<RevivalUpdateManyMutationInput, RevivalUncheckedUpdateManyWithoutUserInput>
  }

  export type RevivalScalarWhereInput = {
    AND?: RevivalScalarWhereInput | RevivalScalarWhereInput[]
    OR?: RevivalScalarWhereInput[]
    NOT?: RevivalScalarWhereInput | RevivalScalarWhereInput[]
    id?: StringFilter<"Revival"> | string
    userId?: StringFilter<"Revival"> | string
    repoFullName?: StringFilter<"Revival"> | string
    revivalType?: StringFilter<"Revival"> | string
    status?: StringFilter<"Revival"> | string
    forkUrl?: StringNullableFilter<"Revival"> | string | null
    startedAt?: DateTimeFilter<"Revival"> | Date | string
  }

  export type SavedGlobalRepoUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedGlobalRepoWhereUniqueInput
    update: XOR<SavedGlobalRepoUpdateWithoutUserInput, SavedGlobalRepoUncheckedUpdateWithoutUserInput>
    create: XOR<SavedGlobalRepoCreateWithoutUserInput, SavedGlobalRepoUncheckedCreateWithoutUserInput>
  }

  export type SavedGlobalRepoUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedGlobalRepoWhereUniqueInput
    data: XOR<SavedGlobalRepoUpdateWithoutUserInput, SavedGlobalRepoUncheckedUpdateWithoutUserInput>
  }

  export type SavedGlobalRepoUpdateManyWithWhereWithoutUserInput = {
    where: SavedGlobalRepoScalarWhereInput
    data: XOR<SavedGlobalRepoUpdateManyMutationInput, SavedGlobalRepoUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedGlobalRepoScalarWhereInput = {
    AND?: SavedGlobalRepoScalarWhereInput | SavedGlobalRepoScalarWhereInput[]
    OR?: SavedGlobalRepoScalarWhereInput[]
    NOT?: SavedGlobalRepoScalarWhereInput | SavedGlobalRepoScalarWhereInput[]
    id?: StringFilter<"SavedGlobalRepo"> | string
    userId?: StringFilter<"SavedGlobalRepo"> | string
    repoFullName?: StringFilter<"SavedGlobalRepo"> | string
    createdAt?: DateTimeFilter<"SavedGlobalRepo"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AIAnalysisCreateWithoutProjectInput = {
    id?: string
    summary: string
    problemsDetected?: AIAnalysisCreateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisCreaterevivalRoadmapInput | string[]
    difficultyLevel?: $Enums.DifficultyLevel
    structureExplanation?: string | null
    stoppageReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIAnalysisUncheckedCreateWithoutProjectInput = {
    id?: string
    summary: string
    problemsDetected?: AIAnalysisCreateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisCreaterevivalRoadmapInput | string[]
    difficultyLevel?: $Enums.DifficultyLevel
    structureExplanation?: string | null
    stoppageReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIAnalysisCreateOrConnectWithoutProjectInput = {
    where: AIAnalysisWhereUniqueInput
    create: XOR<AIAnalysisCreateWithoutProjectInput, AIAnalysisUncheckedCreateWithoutProjectInput>
  }

  export type UserCreateWithoutProjectsAdoptedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsAdoptedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsAdoptedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsAdoptedInput, UserUncheckedCreateWithoutProjectsAdoptedInput>
  }

  export type UserCreateWithoutProjectsOwnedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsOwnedInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsOwnedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsOwnedInput, UserUncheckedCreateWithoutProjectsOwnedInput>
  }

  export type RequestCreateWithoutProjectInput = {
    id?: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
    requester: UserCreateNestedOneWithoutRequestsInput
  }

  export type RequestUncheckedCreateWithoutProjectInput = {
    id?: string
    requesterId: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
  }

  export type RequestCreateOrConnectWithoutProjectInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutProjectInput, RequestUncheckedCreateWithoutProjectInput>
  }

  export type RequestCreateManyProjectInputEnvelope = {
    data: RequestCreateManyProjectInput | RequestCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SavedProjectCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSavedProjectsInput
  }

  export type SavedProjectUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SavedProjectCreateOrConnectWithoutProjectInput = {
    where: SavedProjectWhereUniqueInput
    create: XOR<SavedProjectCreateWithoutProjectInput, SavedProjectUncheckedCreateWithoutProjectInput>
  }

  export type SavedProjectCreateManyProjectInputEnvelope = {
    data: SavedProjectCreateManyProjectInput | SavedProjectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SupportTicketCreateWithoutProjectInput = {
    id?: string
    requestId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    requester: UserCreateNestedOneWithoutTicketsInput
  }

  export type SupportTicketUncheckedCreateWithoutProjectInput = {
    id?: string
    requestId: string
    requesterId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportTicketCreateOrConnectWithoutProjectInput = {
    where: SupportTicketWhereUniqueInput
    create: XOR<SupportTicketCreateWithoutProjectInput, SupportTicketUncheckedCreateWithoutProjectInput>
  }

  export type SupportTicketCreateManyProjectInputEnvelope = {
    data: SupportTicketCreateManyProjectInput | SupportTicketCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type AIAnalysisUpsertWithoutProjectInput = {
    update: XOR<AIAnalysisUpdateWithoutProjectInput, AIAnalysisUncheckedUpdateWithoutProjectInput>
    create: XOR<AIAnalysisCreateWithoutProjectInput, AIAnalysisUncheckedCreateWithoutProjectInput>
    where?: AIAnalysisWhereInput
  }

  export type AIAnalysisUpdateToOneWithWhereWithoutProjectInput = {
    where?: AIAnalysisWhereInput
    data: XOR<AIAnalysisUpdateWithoutProjectInput, AIAnalysisUncheckedUpdateWithoutProjectInput>
  }

  export type AIAnalysisUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemsDetected?: AIAnalysisUpdateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisUpdaterevivalRoadmapInput | string[]
    difficultyLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    structureExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    stoppageReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIAnalysisUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    problemsDetected?: AIAnalysisUpdateproblemsDetectedInput | string[]
    revivalRoadmap?: AIAnalysisUpdaterevivalRoadmapInput | string[]
    difficultyLevel?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    structureExplanation?: NullableStringFieldUpdateOperationsInput | string | null
    stoppageReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutProjectsAdoptedInput = {
    update: XOR<UserUpdateWithoutProjectsAdoptedInput, UserUncheckedUpdateWithoutProjectsAdoptedInput>
    create: XOR<UserCreateWithoutProjectsAdoptedInput, UserUncheckedCreateWithoutProjectsAdoptedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsAdoptedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsAdoptedInput, UserUncheckedUpdateWithoutProjectsAdoptedInput>
  }

  export type UserUpdateWithoutProjectsAdoptedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsAdoptedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutProjectsOwnedInput = {
    update: XOR<UserUpdateWithoutProjectsOwnedInput, UserUncheckedUpdateWithoutProjectsOwnedInput>
    create: XOR<UserCreateWithoutProjectsOwnedInput, UserUncheckedCreateWithoutProjectsOwnedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsOwnedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsOwnedInput, UserUncheckedUpdateWithoutProjectsOwnedInput>
  }

  export type UserUpdateWithoutProjectsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsOwnedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RequestUpsertWithWhereUniqueWithoutProjectInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutProjectInput, RequestUncheckedUpdateWithoutProjectInput>
    create: XOR<RequestCreateWithoutProjectInput, RequestUncheckedCreateWithoutProjectInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutProjectInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutProjectInput, RequestUncheckedUpdateWithoutProjectInput>
  }

  export type RequestUpdateManyWithWhereWithoutProjectInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutProjectInput>
  }

  export type SavedProjectUpsertWithWhereUniqueWithoutProjectInput = {
    where: SavedProjectWhereUniqueInput
    update: XOR<SavedProjectUpdateWithoutProjectInput, SavedProjectUncheckedUpdateWithoutProjectInput>
    create: XOR<SavedProjectCreateWithoutProjectInput, SavedProjectUncheckedCreateWithoutProjectInput>
  }

  export type SavedProjectUpdateWithWhereUniqueWithoutProjectInput = {
    where: SavedProjectWhereUniqueInput
    data: XOR<SavedProjectUpdateWithoutProjectInput, SavedProjectUncheckedUpdateWithoutProjectInput>
  }

  export type SavedProjectUpdateManyWithWhereWithoutProjectInput = {
    where: SavedProjectScalarWhereInput
    data: XOR<SavedProjectUpdateManyMutationInput, SavedProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type SupportTicketUpsertWithWhereUniqueWithoutProjectInput = {
    where: SupportTicketWhereUniqueInput
    update: XOR<SupportTicketUpdateWithoutProjectInput, SupportTicketUncheckedUpdateWithoutProjectInput>
    create: XOR<SupportTicketCreateWithoutProjectInput, SupportTicketUncheckedCreateWithoutProjectInput>
  }

  export type SupportTicketUpdateWithWhereUniqueWithoutProjectInput = {
    where: SupportTicketWhereUniqueInput
    data: XOR<SupportTicketUpdateWithoutProjectInput, SupportTicketUncheckedUpdateWithoutProjectInput>
  }

  export type SupportTicketUpdateManyWithWhereWithoutProjectInput = {
    where: SupportTicketScalarWhereInput
    data: XOR<SupportTicketUpdateManyMutationInput, SupportTicketUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutAnalysisInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    adoptedBy?: UserCreateNestedOneWithoutProjectsAdoptedInput
    owner: UserCreateNestedOneWithoutProjectsOwnedInput
    requests?: RequestCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAnalysisInput = {
    id?: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    adoptedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    requests?: RequestUncheckedCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectUncheckedCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAnalysisInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAnalysisInput, ProjectUncheckedCreateWithoutAnalysisInput>
  }

  export type ProjectUpsertWithoutAnalysisInput = {
    update: XOR<ProjectUpdateWithoutAnalysisInput, ProjectUncheckedUpdateWithoutAnalysisInput>
    create: XOR<ProjectCreateWithoutAnalysisInput, ProjectUncheckedCreateWithoutAnalysisInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAnalysisInput, ProjectUncheckedUpdateWithoutAnalysisInput>
  }

  export type ProjectUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    adoptedBy?: UserUpdateOneWithoutProjectsAdoptedNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsOwnedNestedInput
    requests?: RequestUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    requests?: RequestUncheckedUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUncheckedUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutRequestsInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisCreateNestedOneWithoutProjectInput
    adoptedBy?: UserCreateNestedOneWithoutProjectsAdoptedInput
    owner: UserCreateNestedOneWithoutProjectsOwnedInput
    savedIn?: SavedProjectCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutRequestsInput = {
    id?: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    adoptedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedCreateNestedOneWithoutProjectInput
    savedIn?: SavedProjectUncheckedCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutRequestsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutRequestsInput, ProjectUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutRequestsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type ProjectUpsertWithoutRequestsInput = {
    update: XOR<ProjectUpdateWithoutRequestsInput, ProjectUncheckedUpdateWithoutRequestsInput>
    create: XOR<ProjectCreateWithoutRequestsInput, ProjectUncheckedCreateWithoutRequestsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutRequestsInput, ProjectUncheckedUpdateWithoutRequestsInput>
  }

  export type ProjectUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUpdateOneWithoutProjectNestedInput
    adoptedBy?: UserUpdateOneWithoutProjectsAdoptedNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsOwnedNestedInput
    savedIn?: SavedProjectUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    savedIn?: SavedProjectUncheckedUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutSupportTicketsInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisCreateNestedOneWithoutProjectInput
    adoptedBy?: UserCreateNestedOneWithoutProjectsAdoptedInput
    owner: UserCreateNestedOneWithoutProjectsOwnedInput
    requests?: RequestCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSupportTicketsInput = {
    id?: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    adoptedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedCreateNestedOneWithoutProjectInput
    requests?: RequestUncheckedCreateNestedManyWithoutProjectInput
    savedIn?: SavedProjectUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSupportTicketsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSupportTicketsInput, ProjectUncheckedCreateWithoutSupportTicketsInput>
  }

  export type UserCreateWithoutTicketsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type ProjectUpsertWithoutSupportTicketsInput = {
    update: XOR<ProjectUpdateWithoutSupportTicketsInput, ProjectUncheckedUpdateWithoutSupportTicketsInput>
    create: XOR<ProjectCreateWithoutSupportTicketsInput, ProjectUncheckedCreateWithoutSupportTicketsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSupportTicketsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSupportTicketsInput, ProjectUncheckedUpdateWithoutSupportTicketsInput>
  }

  export type ProjectUpdateWithoutSupportTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUpdateOneWithoutProjectNestedInput
    adoptedBy?: UserUpdateOneWithoutProjectsAdoptedNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsOwnedNestedInput
    requests?: RequestUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSupportTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    requests?: RequestUncheckedUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutSavedInInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisCreateNestedOneWithoutProjectInput
    adoptedBy?: UserCreateNestedOneWithoutProjectsAdoptedInput
    owner: UserCreateNestedOneWithoutProjectsOwnedInput
    requests?: RequestCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSavedInInput = {
    id?: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    adoptedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedCreateNestedOneWithoutProjectInput
    requests?: RequestUncheckedCreateNestedManyWithoutProjectInput
    supportTickets?: SupportTicketUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSavedInInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSavedInInput, ProjectUncheckedCreateWithoutSavedInInput>
  }

  export type UserCreateWithoutSavedProjectsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedProjectsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedProjectsInput, UserUncheckedCreateWithoutSavedProjectsInput>
  }

  export type ProjectUpsertWithoutSavedInInput = {
    update: XOR<ProjectUpdateWithoutSavedInInput, ProjectUncheckedUpdateWithoutSavedInInput>
    create: XOR<ProjectCreateWithoutSavedInInput, ProjectUncheckedCreateWithoutSavedInInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSavedInInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSavedInInput, ProjectUncheckedUpdateWithoutSavedInInput>
  }

  export type ProjectUpdateWithoutSavedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUpdateOneWithoutProjectNestedInput
    adoptedBy?: UserUpdateOneWithoutProjectsAdoptedNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsOwnedNestedInput
    requests?: RequestUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSavedInInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    requests?: RequestUncheckedUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutSavedProjectsInput = {
    update: XOR<UserUpdateWithoutSavedProjectsInput, UserUncheckedUpdateWithoutSavedProjectsInput>
    create: XOR<UserCreateWithoutSavedProjectsInput, UserUncheckedCreateWithoutSavedProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedProjectsInput, UserUncheckedUpdateWithoutSavedProjectsInput>
  }

  export type UserUpdateWithoutSavedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSavedGlobalReposInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    revivals?: RevivalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSavedGlobalReposInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    revivals?: RevivalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSavedGlobalReposInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedGlobalReposInput, UserUncheckedCreateWithoutSavedGlobalReposInput>
  }

  export type UserUpsertWithoutSavedGlobalReposInput = {
    update: XOR<UserUpdateWithoutSavedGlobalReposInput, UserUncheckedUpdateWithoutSavedGlobalReposInput>
    create: XOR<UserCreateWithoutSavedGlobalReposInput, UserUncheckedCreateWithoutSavedGlobalReposInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedGlobalReposInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedGlobalReposInput, UserUncheckedUpdateWithoutSavedGlobalReposInput>
  }

  export type UserUpdateWithoutSavedGlobalReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedGlobalReposInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    revivals?: RevivalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRevivalsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectCreateNestedManyWithoutOwnerInput
    requests?: RequestCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    tickets?: SupportTicketCreateNestedManyWithoutRequesterInput
    savedGlobalRepos?: SavedGlobalRepoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRevivalsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projectsAdopted?: ProjectUncheckedCreateNestedManyWithoutAdoptedByInput
    projectsOwned?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    requests?: RequestUncheckedCreateNestedManyWithoutRequesterInput
    savedProjects?: SavedProjectUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    tickets?: SupportTicketUncheckedCreateNestedManyWithoutRequesterInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRevivalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRevivalsInput, UserUncheckedCreateWithoutRevivalsInput>
  }

  export type UserUpsertWithoutRevivalsInput = {
    update: XOR<UserUpdateWithoutRevivalsInput, UserUncheckedUpdateWithoutRevivalsInput>
    create: XOR<UserCreateWithoutRevivalsInput, UserUncheckedCreateWithoutRevivalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRevivalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRevivalsInput, UserUncheckedUpdateWithoutRevivalsInput>
  }

  export type UserUpdateWithoutRevivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUpdateManyWithoutOwnerNestedInput
    requests?: RequestUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUpdateManyWithoutRequesterNestedInput
    savedGlobalRepos?: SavedGlobalRepoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRevivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projectsAdopted?: ProjectUncheckedUpdateManyWithoutAdoptedByNestedInput
    projectsOwned?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    requests?: RequestUncheckedUpdateManyWithoutRequesterNestedInput
    savedProjects?: SavedProjectUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    tickets?: SupportTicketUncheckedUpdateManyWithoutRequesterNestedInput
    savedGlobalRepos?: SavedGlobalRepoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type ProjectCreateManyAdoptedByInput = {
    id?: string
    ownerId: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    repoUrl: string
    repoFullName: string
    slug: string
    title: string
    shortDescription: string
    status?: $Enums.ProjectStatus
    completionStage: $Enums.CompletionStage
    abandonmentReason: $Enums.AbandonmentReason
    helpNeeded?: ProjectCreatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectCreatetagsInput | string[]
    lastRepoActivityAt?: Date | string | null
    handoffWhat?: string | null
    handoffCompleted?: string | null
    handoffPending?: string | null
    handoffSetup?: string | null
    handoffKnownIssues?: string | null
    handoffNotes?: string | null
    isPriority?: boolean
    priorityExpiresAt?: Date | string | null
    adoptedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    healthScore?: number
    language?: string | null
    lastCommitDate?: Date | string | null
    stars?: number
    revivalMode?: $Enums.RevivalMode
  }

  export type RequestCreateManyRequesterInput = {
    id?: string
    projectId: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
  }

  export type SavedProjectCreateManyUserInput = {
    id?: string
    projectId: string
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SupportTicketCreateManyRequesterInput = {
    id?: string
    projectId: string
    requestId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevivalCreateManyUserInput = {
    id?: string
    repoFullName: string
    revivalType: string
    status?: string
    forkUrl?: string | null
    startedAt?: Date | string
  }

  export type SavedGlobalRepoCreateManyUserInput = {
    id?: string
    repoFullName: string
    createdAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpdateWithoutAdoptedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUpdateOneWithoutProjectNestedInput
    owner?: UserUpdateOneRequiredWithoutProjectsOwnedNestedInput
    requests?: RequestUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAdoptedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    requests?: RequestUncheckedUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUncheckedUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutAdoptedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUpdateOneWithoutProjectNestedInput
    adoptedBy?: UserUpdateOneWithoutProjectsAdoptedNestedInput
    requests?: RequestUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
    analysis?: AIAnalysisUncheckedUpdateOneWithoutProjectNestedInput
    requests?: RequestUncheckedUpdateManyWithoutProjectNestedInput
    savedIn?: SavedProjectUncheckedUpdateManyWithoutProjectNestedInput
    supportTickets?: SupportTicketUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    shortDescription?: StringFieldUpdateOperationsInput | string
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    completionStage?: EnumCompletionStageFieldUpdateOperationsInput | $Enums.CompletionStage
    abandonmentReason?: EnumAbandonmentReasonFieldUpdateOperationsInput | $Enums.AbandonmentReason
    helpNeeded?: ProjectUpdatehelpNeededInput | $Enums.HelpType[]
    tags?: ProjectUpdatetagsInput | string[]
    lastRepoActivityAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    handoffWhat?: NullableStringFieldUpdateOperationsInput | string | null
    handoffCompleted?: NullableStringFieldUpdateOperationsInput | string | null
    handoffPending?: NullableStringFieldUpdateOperationsInput | string | null
    handoffSetup?: NullableStringFieldUpdateOperationsInput | string | null
    handoffKnownIssues?: NullableStringFieldUpdateOperationsInput | string | null
    handoffNotes?: NullableStringFieldUpdateOperationsInput | string | null
    isPriority?: BoolFieldUpdateOperationsInput | boolean
    priorityExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adoptedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    healthScore?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    lastCommitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stars?: IntFieldUpdateOperationsInput | number
    revivalMode?: EnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode
  }

  export type RequestUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
    project?: ProjectUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
  }

  export type RequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
  }

  export type SavedProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSavedInNestedInput
  }

  export type SavedProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutSupportTicketsNestedInput
  }

  export type SupportTicketUncheckedUpdateWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateManyWithoutRequesterInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevivalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    revivalType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    forkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevivalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    revivalType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    forkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevivalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    revivalType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    forkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedGlobalRepoUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedGlobalRepoUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedGlobalRepoUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RequestCreateManyProjectInput = {
    id?: string
    requesterId: string
    type: $Enums.RequestType
    message: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    revivalMode?: $Enums.RevivalMode | null
  }

  export type SavedProjectCreateManyProjectInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type SupportTicketCreateManyProjectInput = {
    id?: string
    requestId: string
    requesterId: string
    message: string
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RequestUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
    requester?: UserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type RequestUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
  }

  export type RequestUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    type?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revivalMode?: NullableEnumRevivalModeFieldUpdateOperationsInput | $Enums.RevivalMode | null
  }

  export type SavedProjectUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedProjectsNestedInput
  }

  export type SavedProjectUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedProjectUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requester?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type SupportTicketUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportTicketUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestId?: StringFieldUpdateOperationsInput | string
    requesterId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AIAnalysisDefaultArgs instead
     */
    export type AIAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AIAnalysisDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RequestDefaultArgs instead
     */
    export type RequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupportTicketDefaultArgs instead
     */
    export type SupportTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupportTicketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavedProjectDefaultArgs instead
     */
    export type SavedProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavedProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SavedGlobalRepoDefaultArgs instead
     */
    export type SavedGlobalRepoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SavedGlobalRepoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RevivalDefaultArgs instead
     */
    export type RevivalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RevivalDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
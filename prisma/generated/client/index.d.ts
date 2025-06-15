
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
 * Model Tickya
 * 
 */
export type Tickya = $Result.DefaultSelection<Prisma.$TickyaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TickyaStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE'
};

export type TickyaStatus = (typeof TickyaStatus)[keyof typeof TickyaStatus]

}

export type TickyaStatus = $Enums.TickyaStatus

export const TickyaStatus: typeof $Enums.TickyaStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tickyas
 * const tickyas = await prisma.tickya.findMany()
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
   * // Fetch zero or more Tickyas
   * const tickyas = await prisma.tickya.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tickya`: Exposes CRUD operations for the **Tickya** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickyas
    * const tickyas = await prisma.tickya.findMany()
    * ```
    */
  get tickya(): Prisma.TickyaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Tickya: 'Tickya'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tickya"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tickya: {
        payload: Prisma.$TickyaPayload<ExtArgs>
        fields: Prisma.TickyaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TickyaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TickyaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>
          }
          findFirst: {
            args: Prisma.TickyaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TickyaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>
          }
          findMany: {
            args: Prisma.TickyaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>[]
          }
          create: {
            args: Prisma.TickyaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>
          }
          createMany: {
            args: Prisma.TickyaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TickyaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>[]
          }
          delete: {
            args: Prisma.TickyaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>
          }
          update: {
            args: Prisma.TickyaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>
          }
          deleteMany: {
            args: Prisma.TickyaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TickyaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TickyaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>[]
          }
          upsert: {
            args: Prisma.TickyaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickyaPayload>
          }
          aggregate: {
            args: Prisma.TickyaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickya>
          }
          groupBy: {
            args: Prisma.TickyaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TickyaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TickyaCountArgs<ExtArgs>
            result: $Utils.Optional<TickyaCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tickya?: TickyaOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model Tickya
   */

  export type AggregateTickya = {
    _count: TickyaCountAggregateOutputType | null
    _min: TickyaMinAggregateOutputType | null
    _max: TickyaMaxAggregateOutputType | null
  }

  export type TickyaMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.TickyaStatus | null
    HN: string | null
    patientName: string | null
    AN: string | null
    department: string | null
    description: string | null
  }

  export type TickyaMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: $Enums.TickyaStatus | null
    HN: string | null
    patientName: string | null
    AN: string | null
    department: string | null
    description: string | null
  }

  export type TickyaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    status: number
    HN: number
    patientName: number
    AN: number
    department: number
    description: number
    _all: number
  }


  export type TickyaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    HN?: true
    patientName?: true
    AN?: true
    department?: true
    description?: true
  }

  export type TickyaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    HN?: true
    patientName?: true
    AN?: true
    department?: true
    description?: true
  }

  export type TickyaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    HN?: true
    patientName?: true
    AN?: true
    department?: true
    description?: true
    _all?: true
  }

  export type TickyaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickya to aggregate.
     */
    where?: TickyaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickyas to fetch.
     */
    orderBy?: TickyaOrderByWithRelationInput | TickyaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TickyaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickyas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickyas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickyas
    **/
    _count?: true | TickyaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TickyaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TickyaMaxAggregateInputType
  }

  export type GetTickyaAggregateType<T extends TickyaAggregateArgs> = {
        [P in keyof T & keyof AggregateTickya]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickya[P]>
      : GetScalarType<T[P], AggregateTickya[P]>
  }




  export type TickyaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TickyaWhereInput
    orderBy?: TickyaOrderByWithAggregationInput | TickyaOrderByWithAggregationInput[]
    by: TickyaScalarFieldEnum[] | TickyaScalarFieldEnum
    having?: TickyaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TickyaCountAggregateInputType | true
    _min?: TickyaMinAggregateInputType
    _max?: TickyaMaxAggregateInputType
  }

  export type TickyaGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    status: $Enums.TickyaStatus
    HN: string
    patientName: string
    AN: string
    department: string
    description: string
    _count: TickyaCountAggregateOutputType | null
    _min: TickyaMinAggregateOutputType | null
    _max: TickyaMaxAggregateOutputType | null
  }

  type GetTickyaGroupByPayload<T extends TickyaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TickyaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TickyaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TickyaGroupByOutputType[P]>
            : GetScalarType<T[P], TickyaGroupByOutputType[P]>
        }
      >
    >


  export type TickyaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    HN?: boolean
    patientName?: boolean
    AN?: boolean
    department?: boolean
    description?: boolean
  }, ExtArgs["result"]["tickya"]>

  export type TickyaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    HN?: boolean
    patientName?: boolean
    AN?: boolean
    department?: boolean
    description?: boolean
  }, ExtArgs["result"]["tickya"]>

  export type TickyaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    HN?: boolean
    patientName?: boolean
    AN?: boolean
    department?: boolean
    description?: boolean
  }, ExtArgs["result"]["tickya"]>

  export type TickyaSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    HN?: boolean
    patientName?: boolean
    AN?: boolean
    department?: boolean
    description?: boolean
  }

  export type TickyaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "status" | "HN" | "patientName" | "AN" | "department" | "description", ExtArgs["result"]["tickya"]>

  export type $TickyaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tickya"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      status: $Enums.TickyaStatus
      HN: string
      patientName: string
      AN: string
      department: string
      description: string
    }, ExtArgs["result"]["tickya"]>
    composites: {}
  }

  type TickyaGetPayload<S extends boolean | null | undefined | TickyaDefaultArgs> = $Result.GetResult<Prisma.$TickyaPayload, S>

  type TickyaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TickyaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TickyaCountAggregateInputType | true
    }

  export interface TickyaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tickya'], meta: { name: 'Tickya' } }
    /**
     * Find zero or one Tickya that matches the filter.
     * @param {TickyaFindUniqueArgs} args - Arguments to find a Tickya
     * @example
     * // Get one Tickya
     * const tickya = await prisma.tickya.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TickyaFindUniqueArgs>(args: SelectSubset<T, TickyaFindUniqueArgs<ExtArgs>>): Prisma__TickyaClient<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickya that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TickyaFindUniqueOrThrowArgs} args - Arguments to find a Tickya
     * @example
     * // Get one Tickya
     * const tickya = await prisma.tickya.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TickyaFindUniqueOrThrowArgs>(args: SelectSubset<T, TickyaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TickyaClient<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickya that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickyaFindFirstArgs} args - Arguments to find a Tickya
     * @example
     * // Get one Tickya
     * const tickya = await prisma.tickya.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TickyaFindFirstArgs>(args?: SelectSubset<T, TickyaFindFirstArgs<ExtArgs>>): Prisma__TickyaClient<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickya that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickyaFindFirstOrThrowArgs} args - Arguments to find a Tickya
     * @example
     * // Get one Tickya
     * const tickya = await prisma.tickya.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TickyaFindFirstOrThrowArgs>(args?: SelectSubset<T, TickyaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TickyaClient<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickyas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickyaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickyas
     * const tickyas = await prisma.tickya.findMany()
     * 
     * // Get first 10 Tickyas
     * const tickyas = await prisma.tickya.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tickyaWithIdOnly = await prisma.tickya.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TickyaFindManyArgs>(args?: SelectSubset<T, TickyaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickya.
     * @param {TickyaCreateArgs} args - Arguments to create a Tickya.
     * @example
     * // Create one Tickya
     * const Tickya = await prisma.tickya.create({
     *   data: {
     *     // ... data to create a Tickya
     *   }
     * })
     * 
     */
    create<T extends TickyaCreateArgs>(args: SelectSubset<T, TickyaCreateArgs<ExtArgs>>): Prisma__TickyaClient<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickyas.
     * @param {TickyaCreateManyArgs} args - Arguments to create many Tickyas.
     * @example
     * // Create many Tickyas
     * const tickya = await prisma.tickya.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TickyaCreateManyArgs>(args?: SelectSubset<T, TickyaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickyas and returns the data saved in the database.
     * @param {TickyaCreateManyAndReturnArgs} args - Arguments to create many Tickyas.
     * @example
     * // Create many Tickyas
     * const tickya = await prisma.tickya.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickyas and only return the `id`
     * const tickyaWithIdOnly = await prisma.tickya.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TickyaCreateManyAndReturnArgs>(args?: SelectSubset<T, TickyaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickya.
     * @param {TickyaDeleteArgs} args - Arguments to delete one Tickya.
     * @example
     * // Delete one Tickya
     * const Tickya = await prisma.tickya.delete({
     *   where: {
     *     // ... filter to delete one Tickya
     *   }
     * })
     * 
     */
    delete<T extends TickyaDeleteArgs>(args: SelectSubset<T, TickyaDeleteArgs<ExtArgs>>): Prisma__TickyaClient<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickya.
     * @param {TickyaUpdateArgs} args - Arguments to update one Tickya.
     * @example
     * // Update one Tickya
     * const tickya = await prisma.tickya.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TickyaUpdateArgs>(args: SelectSubset<T, TickyaUpdateArgs<ExtArgs>>): Prisma__TickyaClient<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickyas.
     * @param {TickyaDeleteManyArgs} args - Arguments to filter Tickyas to delete.
     * @example
     * // Delete a few Tickyas
     * const { count } = await prisma.tickya.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TickyaDeleteManyArgs>(args?: SelectSubset<T, TickyaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickyas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickyaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickyas
     * const tickya = await prisma.tickya.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TickyaUpdateManyArgs>(args: SelectSubset<T, TickyaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickyas and returns the data updated in the database.
     * @param {TickyaUpdateManyAndReturnArgs} args - Arguments to update many Tickyas.
     * @example
     * // Update many Tickyas
     * const tickya = await prisma.tickya.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickyas and only return the `id`
     * const tickyaWithIdOnly = await prisma.tickya.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TickyaUpdateManyAndReturnArgs>(args: SelectSubset<T, TickyaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickya.
     * @param {TickyaUpsertArgs} args - Arguments to update or create a Tickya.
     * @example
     * // Update or create a Tickya
     * const tickya = await prisma.tickya.upsert({
     *   create: {
     *     // ... data to create a Tickya
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickya we want to update
     *   }
     * })
     */
    upsert<T extends TickyaUpsertArgs>(args: SelectSubset<T, TickyaUpsertArgs<ExtArgs>>): Prisma__TickyaClient<$Result.GetResult<Prisma.$TickyaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickyas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickyaCountArgs} args - Arguments to filter Tickyas to count.
     * @example
     * // Count the number of Tickyas
     * const count = await prisma.tickya.count({
     *   where: {
     *     // ... the filter for the Tickyas we want to count
     *   }
     * })
    **/
    count<T extends TickyaCountArgs>(
      args?: Subset<T, TickyaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TickyaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickya.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickyaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TickyaAggregateArgs>(args: Subset<T, TickyaAggregateArgs>): Prisma.PrismaPromise<GetTickyaAggregateType<T>>

    /**
     * Group by Tickya.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickyaGroupByArgs} args - Group by arguments.
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
      T extends TickyaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TickyaGroupByArgs['orderBy'] }
        : { orderBy?: TickyaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TickyaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTickyaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tickya model
   */
  readonly fields: TickyaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tickya.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TickyaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Tickya model
   */
  interface TickyaFieldRefs {
    readonly id: FieldRef<"Tickya", 'String'>
    readonly createdAt: FieldRef<"Tickya", 'DateTime'>
    readonly updatedAt: FieldRef<"Tickya", 'DateTime'>
    readonly status: FieldRef<"Tickya", 'TickyaStatus'>
    readonly HN: FieldRef<"Tickya", 'String'>
    readonly patientName: FieldRef<"Tickya", 'String'>
    readonly AN: FieldRef<"Tickya", 'String'>
    readonly department: FieldRef<"Tickya", 'String'>
    readonly description: FieldRef<"Tickya", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tickya findUnique
   */
  export type TickyaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * Filter, which Tickya to fetch.
     */
    where: TickyaWhereUniqueInput
  }

  /**
   * Tickya findUniqueOrThrow
   */
  export type TickyaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * Filter, which Tickya to fetch.
     */
    where: TickyaWhereUniqueInput
  }

  /**
   * Tickya findFirst
   */
  export type TickyaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * Filter, which Tickya to fetch.
     */
    where?: TickyaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickyas to fetch.
     */
    orderBy?: TickyaOrderByWithRelationInput | TickyaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickyas.
     */
    cursor?: TickyaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickyas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickyas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickyas.
     */
    distinct?: TickyaScalarFieldEnum | TickyaScalarFieldEnum[]
  }

  /**
   * Tickya findFirstOrThrow
   */
  export type TickyaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * Filter, which Tickya to fetch.
     */
    where?: TickyaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickyas to fetch.
     */
    orderBy?: TickyaOrderByWithRelationInput | TickyaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickyas.
     */
    cursor?: TickyaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickyas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickyas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickyas.
     */
    distinct?: TickyaScalarFieldEnum | TickyaScalarFieldEnum[]
  }

  /**
   * Tickya findMany
   */
  export type TickyaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * Filter, which Tickyas to fetch.
     */
    where?: TickyaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickyas to fetch.
     */
    orderBy?: TickyaOrderByWithRelationInput | TickyaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickyas.
     */
    cursor?: TickyaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickyas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickyas.
     */
    skip?: number
    distinct?: TickyaScalarFieldEnum | TickyaScalarFieldEnum[]
  }

  /**
   * Tickya create
   */
  export type TickyaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * The data needed to create a Tickya.
     */
    data: XOR<TickyaCreateInput, TickyaUncheckedCreateInput>
  }

  /**
   * Tickya createMany
   */
  export type TickyaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickyas.
     */
    data: TickyaCreateManyInput | TickyaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tickya createManyAndReturn
   */
  export type TickyaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * The data used to create many Tickyas.
     */
    data: TickyaCreateManyInput | TickyaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tickya update
   */
  export type TickyaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * The data needed to update a Tickya.
     */
    data: XOR<TickyaUpdateInput, TickyaUncheckedUpdateInput>
    /**
     * Choose, which Tickya to update.
     */
    where: TickyaWhereUniqueInput
  }

  /**
   * Tickya updateMany
   */
  export type TickyaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickyas.
     */
    data: XOR<TickyaUpdateManyMutationInput, TickyaUncheckedUpdateManyInput>
    /**
     * Filter which Tickyas to update
     */
    where?: TickyaWhereInput
    /**
     * Limit how many Tickyas to update.
     */
    limit?: number
  }

  /**
   * Tickya updateManyAndReturn
   */
  export type TickyaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * The data used to update Tickyas.
     */
    data: XOR<TickyaUpdateManyMutationInput, TickyaUncheckedUpdateManyInput>
    /**
     * Filter which Tickyas to update
     */
    where?: TickyaWhereInput
    /**
     * Limit how many Tickyas to update.
     */
    limit?: number
  }

  /**
   * Tickya upsert
   */
  export type TickyaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * The filter to search for the Tickya to update in case it exists.
     */
    where: TickyaWhereUniqueInput
    /**
     * In case the Tickya found by the `where` argument doesn't exist, create a new Tickya with this data.
     */
    create: XOR<TickyaCreateInput, TickyaUncheckedCreateInput>
    /**
     * In case the Tickya was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TickyaUpdateInput, TickyaUncheckedUpdateInput>
  }

  /**
   * Tickya delete
   */
  export type TickyaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
    /**
     * Filter which Tickya to delete.
     */
    where: TickyaWhereUniqueInput
  }

  /**
   * Tickya deleteMany
   */
  export type TickyaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickyas to delete
     */
    where?: TickyaWhereInput
    /**
     * Limit how many Tickyas to delete.
     */
    limit?: number
  }

  /**
   * Tickya without action
   */
  export type TickyaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickya
     */
    select?: TickyaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickya
     */
    omit?: TickyaOmit<ExtArgs> | null
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


  export const TickyaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    HN: 'HN',
    patientName: 'patientName',
    AN: 'AN',
    department: 'department',
    description: 'description'
  };

  export type TickyaScalarFieldEnum = (typeof TickyaScalarFieldEnum)[keyof typeof TickyaScalarFieldEnum]


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
   * Reference to a field of type 'TickyaStatus'
   */
  export type EnumTickyaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TickyaStatus'>
    


  /**
   * Reference to a field of type 'TickyaStatus[]'
   */
  export type ListEnumTickyaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TickyaStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TickyaWhereInput = {
    AND?: TickyaWhereInput | TickyaWhereInput[]
    OR?: TickyaWhereInput[]
    NOT?: TickyaWhereInput | TickyaWhereInput[]
    id?: StringFilter<"Tickya"> | string
    createdAt?: DateTimeFilter<"Tickya"> | Date | string
    updatedAt?: DateTimeFilter<"Tickya"> | Date | string
    status?: EnumTickyaStatusFilter<"Tickya"> | $Enums.TickyaStatus
    HN?: StringFilter<"Tickya"> | string
    patientName?: StringFilter<"Tickya"> | string
    AN?: StringFilter<"Tickya"> | string
    department?: StringFilter<"Tickya"> | string
    description?: StringFilter<"Tickya"> | string
  }

  export type TickyaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    HN?: SortOrder
    patientName?: SortOrder
    AN?: SortOrder
    department?: SortOrder
    description?: SortOrder
  }

  export type TickyaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TickyaWhereInput | TickyaWhereInput[]
    OR?: TickyaWhereInput[]
    NOT?: TickyaWhereInput | TickyaWhereInput[]
    createdAt?: DateTimeFilter<"Tickya"> | Date | string
    updatedAt?: DateTimeFilter<"Tickya"> | Date | string
    status?: EnumTickyaStatusFilter<"Tickya"> | $Enums.TickyaStatus
    HN?: StringFilter<"Tickya"> | string
    patientName?: StringFilter<"Tickya"> | string
    AN?: StringFilter<"Tickya"> | string
    department?: StringFilter<"Tickya"> | string
    description?: StringFilter<"Tickya"> | string
  }, "id">

  export type TickyaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    HN?: SortOrder
    patientName?: SortOrder
    AN?: SortOrder
    department?: SortOrder
    description?: SortOrder
    _count?: TickyaCountOrderByAggregateInput
    _max?: TickyaMaxOrderByAggregateInput
    _min?: TickyaMinOrderByAggregateInput
  }

  export type TickyaScalarWhereWithAggregatesInput = {
    AND?: TickyaScalarWhereWithAggregatesInput | TickyaScalarWhereWithAggregatesInput[]
    OR?: TickyaScalarWhereWithAggregatesInput[]
    NOT?: TickyaScalarWhereWithAggregatesInput | TickyaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tickya"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tickya"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tickya"> | Date | string
    status?: EnumTickyaStatusWithAggregatesFilter<"Tickya"> | $Enums.TickyaStatus
    HN?: StringWithAggregatesFilter<"Tickya"> | string
    patientName?: StringWithAggregatesFilter<"Tickya"> | string
    AN?: StringWithAggregatesFilter<"Tickya"> | string
    department?: StringWithAggregatesFilter<"Tickya"> | string
    description?: StringWithAggregatesFilter<"Tickya"> | string
  }

  export type TickyaCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.TickyaStatus
    HN: string
    patientName: string
    AN: string
    department: string
    description: string
  }

  export type TickyaUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.TickyaStatus
    HN: string
    patientName: string
    AN: string
    department: string
    description: string
  }

  export type TickyaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTickyaStatusFieldUpdateOperationsInput | $Enums.TickyaStatus
    HN?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    AN?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TickyaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTickyaStatusFieldUpdateOperationsInput | $Enums.TickyaStatus
    HN?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    AN?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TickyaCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    status: $Enums.TickyaStatus
    HN: string
    patientName: string
    AN: string
    department: string
    description: string
  }

  export type TickyaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTickyaStatusFieldUpdateOperationsInput | $Enums.TickyaStatus
    HN?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    AN?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TickyaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTickyaStatusFieldUpdateOperationsInput | $Enums.TickyaStatus
    HN?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    AN?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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

  export type EnumTickyaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TickyaStatus | EnumTickyaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TickyaStatus[] | ListEnumTickyaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TickyaStatus[] | ListEnumTickyaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTickyaStatusFilter<$PrismaModel> | $Enums.TickyaStatus
  }

  export type TickyaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    HN?: SortOrder
    patientName?: SortOrder
    AN?: SortOrder
    department?: SortOrder
    description?: SortOrder
  }

  export type TickyaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    HN?: SortOrder
    patientName?: SortOrder
    AN?: SortOrder
    department?: SortOrder
    description?: SortOrder
  }

  export type TickyaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    HN?: SortOrder
    patientName?: SortOrder
    AN?: SortOrder
    department?: SortOrder
    description?: SortOrder
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

  export type EnumTickyaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TickyaStatus | EnumTickyaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TickyaStatus[] | ListEnumTickyaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TickyaStatus[] | ListEnumTickyaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTickyaStatusWithAggregatesFilter<$PrismaModel> | $Enums.TickyaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTickyaStatusFilter<$PrismaModel>
    _max?: NestedEnumTickyaStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumTickyaStatusFieldUpdateOperationsInput = {
    set?: $Enums.TickyaStatus
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

  export type NestedEnumTickyaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TickyaStatus | EnumTickyaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TickyaStatus[] | ListEnumTickyaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TickyaStatus[] | ListEnumTickyaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTickyaStatusFilter<$PrismaModel> | $Enums.TickyaStatus
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

  export type NestedEnumTickyaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TickyaStatus | EnumTickyaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TickyaStatus[] | ListEnumTickyaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TickyaStatus[] | ListEnumTickyaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTickyaStatusWithAggregatesFilter<$PrismaModel> | $Enums.TickyaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTickyaStatusFilter<$PrismaModel>
    _max?: NestedEnumTickyaStatusFilter<$PrismaModel>
  }



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

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
 * Model saved_matches
 * 
 */
export type saved_matches = $Result.DefaultSelection<Prisma.$saved_matchesPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Saved_matches
 * const saved_matches = await prisma.saved_matches.findMany()
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
   * // Fetch zero or more Saved_matches
   * const saved_matches = await prisma.saved_matches.findMany()
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
   * `prisma.saved_matches`: Exposes CRUD operations for the **saved_matches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saved_matches
    * const saved_matches = await prisma.saved_matches.findMany()
    * ```
    */
  get saved_matches(): Prisma.saved_matchesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    saved_matches: 'saved_matches',
    users: 'users'
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
      modelProps: "saved_matches" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      saved_matches: {
        payload: Prisma.$saved_matchesPayload<ExtArgs>
        fields: Prisma.saved_matchesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saved_matchesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saved_matchesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>
          }
          findFirst: {
            args: Prisma.saved_matchesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saved_matchesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>
          }
          findMany: {
            args: Prisma.saved_matchesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>[]
          }
          create: {
            args: Prisma.saved_matchesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>
          }
          createMany: {
            args: Prisma.saved_matchesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.saved_matchesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>[]
          }
          delete: {
            args: Prisma.saved_matchesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>
          }
          update: {
            args: Prisma.saved_matchesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>
          }
          deleteMany: {
            args: Prisma.saved_matchesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saved_matchesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.saved_matchesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>[]
          }
          upsert: {
            args: Prisma.saved_matchesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saved_matchesPayload>
          }
          aggregate: {
            args: Prisma.Saved_matchesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaved_matches>
          }
          groupBy: {
            args: Prisma.saved_matchesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Saved_matchesGroupByOutputType>[]
          }
          count: {
            args: Prisma.saved_matchesCountArgs<ExtArgs>
            result: $Utils.Optional<Saved_matchesCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    saved_matches?: saved_matchesOmit
    users?: usersOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    saved_matches: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_matches?: boolean | UsersCountOutputTypeCountSaved_matchesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSaved_matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_matchesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model saved_matches
   */

  export type AggregateSaved_matches = {
    _count: Saved_matchesCountAggregateOutputType | null
    _avg: Saved_matchesAvgAggregateOutputType | null
    _sum: Saved_matchesSumAggregateOutputType | null
    _min: Saved_matchesMinAggregateOutputType | null
    _max: Saved_matchesMaxAggregateOutputType | null
  }

  export type Saved_matchesAvgAggregateOutputType = {
    gameDuration: number | null
    goldPerMinute: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damageDealt: number | null
    damageTaken: number | null
    visionScore: number | null
    cs: number | null
  }

  export type Saved_matchesSumAggregateOutputType = {
    gameDuration: number | null
    goldPerMinute: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    damageDealt: number | null
    damageTaken: number | null
    visionScore: number | null
    cs: number | null
  }

  export type Saved_matchesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    matchId: string | null
    summonerName: string | null
    championName: string | null
    result: string | null
    gameType: string | null
    gameDuration: number | null
    goldPerMinute: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    date: Date | null
    damageDealt: number | null
    damageTaken: number | null
    visionScore: number | null
    cs: number | null
  }

  export type Saved_matchesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    matchId: string | null
    summonerName: string | null
    championName: string | null
    result: string | null
    gameType: string | null
    gameDuration: number | null
    goldPerMinute: number | null
    kills: number | null
    deaths: number | null
    assists: number | null
    date: Date | null
    damageDealt: number | null
    damageTaken: number | null
    visionScore: number | null
    cs: number | null
  }

  export type Saved_matchesCountAggregateOutputType = {
    id: number
    userId: number
    matchId: number
    summonerName: number
    championName: number
    result: number
    gameType: number
    gameDuration: number
    goldPerMinute: number
    kills: number
    deaths: number
    assists: number
    date: number
    teammates: number
    items: number
    damageDealt: number
    damageTaken: number
    visionScore: number
    cs: number
    enemyTeam: number
    _all: number
  }


  export type Saved_matchesAvgAggregateInputType = {
    gameDuration?: true
    goldPerMinute?: true
    kills?: true
    deaths?: true
    assists?: true
    damageDealt?: true
    damageTaken?: true
    visionScore?: true
    cs?: true
  }

  export type Saved_matchesSumAggregateInputType = {
    gameDuration?: true
    goldPerMinute?: true
    kills?: true
    deaths?: true
    assists?: true
    damageDealt?: true
    damageTaken?: true
    visionScore?: true
    cs?: true
  }

  export type Saved_matchesMinAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    summonerName?: true
    championName?: true
    result?: true
    gameType?: true
    gameDuration?: true
    goldPerMinute?: true
    kills?: true
    deaths?: true
    assists?: true
    date?: true
    damageDealt?: true
    damageTaken?: true
    visionScore?: true
    cs?: true
  }

  export type Saved_matchesMaxAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    summonerName?: true
    championName?: true
    result?: true
    gameType?: true
    gameDuration?: true
    goldPerMinute?: true
    kills?: true
    deaths?: true
    assists?: true
    date?: true
    damageDealt?: true
    damageTaken?: true
    visionScore?: true
    cs?: true
  }

  export type Saved_matchesCountAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    summonerName?: true
    championName?: true
    result?: true
    gameType?: true
    gameDuration?: true
    goldPerMinute?: true
    kills?: true
    deaths?: true
    assists?: true
    date?: true
    teammates?: true
    items?: true
    damageDealt?: true
    damageTaken?: true
    visionScore?: true
    cs?: true
    enemyTeam?: true
    _all?: true
  }

  export type Saved_matchesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_matches to aggregate.
     */
    where?: saved_matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_matches to fetch.
     */
    orderBy?: saved_matchesOrderByWithRelationInput | saved_matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saved_matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saved_matches
    **/
    _count?: true | Saved_matchesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Saved_matchesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Saved_matchesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Saved_matchesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Saved_matchesMaxAggregateInputType
  }

  export type GetSaved_matchesAggregateType<T extends Saved_matchesAggregateArgs> = {
        [P in keyof T & keyof AggregateSaved_matches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaved_matches[P]>
      : GetScalarType<T[P], AggregateSaved_matches[P]>
  }




  export type saved_matchesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saved_matchesWhereInput
    orderBy?: saved_matchesOrderByWithAggregationInput | saved_matchesOrderByWithAggregationInput[]
    by: Saved_matchesScalarFieldEnum[] | Saved_matchesScalarFieldEnum
    having?: saved_matchesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Saved_matchesCountAggregateInputType | true
    _avg?: Saved_matchesAvgAggregateInputType
    _sum?: Saved_matchesSumAggregateInputType
    _min?: Saved_matchesMinAggregateInputType
    _max?: Saved_matchesMaxAggregateInputType
  }

  export type Saved_matchesGroupByOutputType = {
    id: string
    userId: string
    matchId: string
    summonerName: string
    championName: string
    result: string
    gameType: string
    gameDuration: number
    goldPerMinute: number
    kills: number
    deaths: number
    assists: number
    date: Date
    teammates: JsonValue
    items: JsonValue | null
    damageDealt: number | null
    damageTaken: number | null
    visionScore: number | null
    cs: number | null
    enemyTeam: JsonValue | null
    _count: Saved_matchesCountAggregateOutputType | null
    _avg: Saved_matchesAvgAggregateOutputType | null
    _sum: Saved_matchesSumAggregateOutputType | null
    _min: Saved_matchesMinAggregateOutputType | null
    _max: Saved_matchesMaxAggregateOutputType | null
  }

  type GetSaved_matchesGroupByPayload<T extends saved_matchesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Saved_matchesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Saved_matchesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Saved_matchesGroupByOutputType[P]>
            : GetScalarType<T[P], Saved_matchesGroupByOutputType[P]>
        }
      >
    >


  export type saved_matchesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    summonerName?: boolean
    championName?: boolean
    result?: boolean
    gameType?: boolean
    gameDuration?: boolean
    goldPerMinute?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    date?: boolean
    teammates?: boolean
    items?: boolean
    damageDealt?: boolean
    damageTaken?: boolean
    visionScore?: boolean
    cs?: boolean
    enemyTeam?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_matches"]>

  export type saved_matchesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    summonerName?: boolean
    championName?: boolean
    result?: boolean
    gameType?: boolean
    gameDuration?: boolean
    goldPerMinute?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    date?: boolean
    teammates?: boolean
    items?: boolean
    damageDealt?: boolean
    damageTaken?: boolean
    visionScore?: boolean
    cs?: boolean
    enemyTeam?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_matches"]>

  export type saved_matchesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    summonerName?: boolean
    championName?: boolean
    result?: boolean
    gameType?: boolean
    gameDuration?: boolean
    goldPerMinute?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    date?: boolean
    teammates?: boolean
    items?: boolean
    damageDealt?: boolean
    damageTaken?: boolean
    visionScore?: boolean
    cs?: boolean
    enemyTeam?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saved_matches"]>

  export type saved_matchesSelectScalar = {
    id?: boolean
    userId?: boolean
    matchId?: boolean
    summonerName?: boolean
    championName?: boolean
    result?: boolean
    gameType?: boolean
    gameDuration?: boolean
    goldPerMinute?: boolean
    kills?: boolean
    deaths?: boolean
    assists?: boolean
    date?: boolean
    teammates?: boolean
    items?: boolean
    damageDealt?: boolean
    damageTaken?: boolean
    visionScore?: boolean
    cs?: boolean
    enemyTeam?: boolean
  }

  export type saved_matchesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "matchId" | "summonerName" | "championName" | "result" | "gameType" | "gameDuration" | "goldPerMinute" | "kills" | "deaths" | "assists" | "date" | "teammates" | "items" | "damageDealt" | "damageTaken" | "visionScore" | "cs" | "enemyTeam", ExtArgs["result"]["saved_matches"]>
  export type saved_matchesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type saved_matchesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type saved_matchesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $saved_matchesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saved_matches"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      matchId: string
      summonerName: string
      championName: string
      result: string
      gameType: string
      gameDuration: number
      goldPerMinute: number
      kills: number
      deaths: number
      assists: number
      date: Date
      teammates: Prisma.JsonValue
      items: Prisma.JsonValue | null
      damageDealt: number | null
      damageTaken: number | null
      visionScore: number | null
      cs: number | null
      enemyTeam: Prisma.JsonValue | null
    }, ExtArgs["result"]["saved_matches"]>
    composites: {}
  }

  type saved_matchesGetPayload<S extends boolean | null | undefined | saved_matchesDefaultArgs> = $Result.GetResult<Prisma.$saved_matchesPayload, S>

  type saved_matchesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saved_matchesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Saved_matchesCountAggregateInputType | true
    }

  export interface saved_matchesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saved_matches'], meta: { name: 'saved_matches' } }
    /**
     * Find zero or one Saved_matches that matches the filter.
     * @param {saved_matchesFindUniqueArgs} args - Arguments to find a Saved_matches
     * @example
     * // Get one Saved_matches
     * const saved_matches = await prisma.saved_matches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saved_matchesFindUniqueArgs>(args: SelectSubset<T, saved_matchesFindUniqueArgs<ExtArgs>>): Prisma__saved_matchesClient<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saved_matches that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saved_matchesFindUniqueOrThrowArgs} args - Arguments to find a Saved_matches
     * @example
     * // Get one Saved_matches
     * const saved_matches = await prisma.saved_matches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saved_matchesFindUniqueOrThrowArgs>(args: SelectSubset<T, saved_matchesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saved_matchesClient<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_matchesFindFirstArgs} args - Arguments to find a Saved_matches
     * @example
     * // Get one Saved_matches
     * const saved_matches = await prisma.saved_matches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saved_matchesFindFirstArgs>(args?: SelectSubset<T, saved_matchesFindFirstArgs<ExtArgs>>): Prisma__saved_matchesClient<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saved_matches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_matchesFindFirstOrThrowArgs} args - Arguments to find a Saved_matches
     * @example
     * // Get one Saved_matches
     * const saved_matches = await prisma.saved_matches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saved_matchesFindFirstOrThrowArgs>(args?: SelectSubset<T, saved_matchesFindFirstOrThrowArgs<ExtArgs>>): Prisma__saved_matchesClient<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saved_matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_matchesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saved_matches
     * const saved_matches = await prisma.saved_matches.findMany()
     * 
     * // Get first 10 Saved_matches
     * const saved_matches = await prisma.saved_matches.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saved_matchesWithIdOnly = await prisma.saved_matches.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saved_matchesFindManyArgs>(args?: SelectSubset<T, saved_matchesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saved_matches.
     * @param {saved_matchesCreateArgs} args - Arguments to create a Saved_matches.
     * @example
     * // Create one Saved_matches
     * const Saved_matches = await prisma.saved_matches.create({
     *   data: {
     *     // ... data to create a Saved_matches
     *   }
     * })
     * 
     */
    create<T extends saved_matchesCreateArgs>(args: SelectSubset<T, saved_matchesCreateArgs<ExtArgs>>): Prisma__saved_matchesClient<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saved_matches.
     * @param {saved_matchesCreateManyArgs} args - Arguments to create many Saved_matches.
     * @example
     * // Create many Saved_matches
     * const saved_matches = await prisma.saved_matches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saved_matchesCreateManyArgs>(args?: SelectSubset<T, saved_matchesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saved_matches and returns the data saved in the database.
     * @param {saved_matchesCreateManyAndReturnArgs} args - Arguments to create many Saved_matches.
     * @example
     * // Create many Saved_matches
     * const saved_matches = await prisma.saved_matches.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saved_matches and only return the `id`
     * const saved_matchesWithIdOnly = await prisma.saved_matches.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends saved_matchesCreateManyAndReturnArgs>(args?: SelectSubset<T, saved_matchesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saved_matches.
     * @param {saved_matchesDeleteArgs} args - Arguments to delete one Saved_matches.
     * @example
     * // Delete one Saved_matches
     * const Saved_matches = await prisma.saved_matches.delete({
     *   where: {
     *     // ... filter to delete one Saved_matches
     *   }
     * })
     * 
     */
    delete<T extends saved_matchesDeleteArgs>(args: SelectSubset<T, saved_matchesDeleteArgs<ExtArgs>>): Prisma__saved_matchesClient<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saved_matches.
     * @param {saved_matchesUpdateArgs} args - Arguments to update one Saved_matches.
     * @example
     * // Update one Saved_matches
     * const saved_matches = await prisma.saved_matches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saved_matchesUpdateArgs>(args: SelectSubset<T, saved_matchesUpdateArgs<ExtArgs>>): Prisma__saved_matchesClient<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saved_matches.
     * @param {saved_matchesDeleteManyArgs} args - Arguments to filter Saved_matches to delete.
     * @example
     * // Delete a few Saved_matches
     * const { count } = await prisma.saved_matches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saved_matchesDeleteManyArgs>(args?: SelectSubset<T, saved_matchesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_matchesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saved_matches
     * const saved_matches = await prisma.saved_matches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saved_matchesUpdateManyArgs>(args: SelectSubset<T, saved_matchesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saved_matches and returns the data updated in the database.
     * @param {saved_matchesUpdateManyAndReturnArgs} args - Arguments to update many Saved_matches.
     * @example
     * // Update many Saved_matches
     * const saved_matches = await prisma.saved_matches.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saved_matches and only return the `id`
     * const saved_matchesWithIdOnly = await prisma.saved_matches.updateManyAndReturn({
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
    updateManyAndReturn<T extends saved_matchesUpdateManyAndReturnArgs>(args: SelectSubset<T, saved_matchesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saved_matches.
     * @param {saved_matchesUpsertArgs} args - Arguments to update or create a Saved_matches.
     * @example
     * // Update or create a Saved_matches
     * const saved_matches = await prisma.saved_matches.upsert({
     *   create: {
     *     // ... data to create a Saved_matches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saved_matches we want to update
     *   }
     * })
     */
    upsert<T extends saved_matchesUpsertArgs>(args: SelectSubset<T, saved_matchesUpsertArgs<ExtArgs>>): Prisma__saved_matchesClient<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saved_matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_matchesCountArgs} args - Arguments to filter Saved_matches to count.
     * @example
     * // Count the number of Saved_matches
     * const count = await prisma.saved_matches.count({
     *   where: {
     *     // ... the filter for the Saved_matches we want to count
     *   }
     * })
    **/
    count<T extends saved_matchesCountArgs>(
      args?: Subset<T, saved_matchesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Saved_matchesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saved_matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Saved_matchesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Saved_matchesAggregateArgs>(args: Subset<T, Saved_matchesAggregateArgs>): Prisma.PrismaPromise<GetSaved_matchesAggregateType<T>>

    /**
     * Group by Saved_matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saved_matchesGroupByArgs} args - Group by arguments.
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
      T extends saved_matchesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saved_matchesGroupByArgs['orderBy'] }
        : { orderBy?: saved_matchesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, saved_matchesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaved_matchesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saved_matches model
   */
  readonly fields: saved_matchesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saved_matches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saved_matchesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the saved_matches model
   */
  interface saved_matchesFieldRefs {
    readonly id: FieldRef<"saved_matches", 'String'>
    readonly userId: FieldRef<"saved_matches", 'String'>
    readonly matchId: FieldRef<"saved_matches", 'String'>
    readonly summonerName: FieldRef<"saved_matches", 'String'>
    readonly championName: FieldRef<"saved_matches", 'String'>
    readonly result: FieldRef<"saved_matches", 'String'>
    readonly gameType: FieldRef<"saved_matches", 'String'>
    readonly gameDuration: FieldRef<"saved_matches", 'Int'>
    readonly goldPerMinute: FieldRef<"saved_matches", 'Int'>
    readonly kills: FieldRef<"saved_matches", 'Int'>
    readonly deaths: FieldRef<"saved_matches", 'Int'>
    readonly assists: FieldRef<"saved_matches", 'Int'>
    readonly date: FieldRef<"saved_matches", 'DateTime'>
    readonly teammates: FieldRef<"saved_matches", 'Json'>
    readonly items: FieldRef<"saved_matches", 'Json'>
    readonly damageDealt: FieldRef<"saved_matches", 'Int'>
    readonly damageTaken: FieldRef<"saved_matches", 'Int'>
    readonly visionScore: FieldRef<"saved_matches", 'Int'>
    readonly cs: FieldRef<"saved_matches", 'Int'>
    readonly enemyTeam: FieldRef<"saved_matches", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * saved_matches findUnique
   */
  export type saved_matchesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * Filter, which saved_matches to fetch.
     */
    where: saved_matchesWhereUniqueInput
  }

  /**
   * saved_matches findUniqueOrThrow
   */
  export type saved_matchesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * Filter, which saved_matches to fetch.
     */
    where: saved_matchesWhereUniqueInput
  }

  /**
   * saved_matches findFirst
   */
  export type saved_matchesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * Filter, which saved_matches to fetch.
     */
    where?: saved_matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_matches to fetch.
     */
    orderBy?: saved_matchesOrderByWithRelationInput | saved_matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_matches.
     */
    cursor?: saved_matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_matches.
     */
    distinct?: Saved_matchesScalarFieldEnum | Saved_matchesScalarFieldEnum[]
  }

  /**
   * saved_matches findFirstOrThrow
   */
  export type saved_matchesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * Filter, which saved_matches to fetch.
     */
    where?: saved_matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_matches to fetch.
     */
    orderBy?: saved_matchesOrderByWithRelationInput | saved_matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saved_matches.
     */
    cursor?: saved_matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saved_matches.
     */
    distinct?: Saved_matchesScalarFieldEnum | Saved_matchesScalarFieldEnum[]
  }

  /**
   * saved_matches findMany
   */
  export type saved_matchesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * Filter, which saved_matches to fetch.
     */
    where?: saved_matchesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saved_matches to fetch.
     */
    orderBy?: saved_matchesOrderByWithRelationInput | saved_matchesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saved_matches.
     */
    cursor?: saved_matchesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saved_matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saved_matches.
     */
    skip?: number
    distinct?: Saved_matchesScalarFieldEnum | Saved_matchesScalarFieldEnum[]
  }

  /**
   * saved_matches create
   */
  export type saved_matchesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * The data needed to create a saved_matches.
     */
    data: XOR<saved_matchesCreateInput, saved_matchesUncheckedCreateInput>
  }

  /**
   * saved_matches createMany
   */
  export type saved_matchesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saved_matches.
     */
    data: saved_matchesCreateManyInput | saved_matchesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * saved_matches createManyAndReturn
   */
  export type saved_matchesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * The data used to create many saved_matches.
     */
    data: saved_matchesCreateManyInput | saved_matchesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * saved_matches update
   */
  export type saved_matchesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * The data needed to update a saved_matches.
     */
    data: XOR<saved_matchesUpdateInput, saved_matchesUncheckedUpdateInput>
    /**
     * Choose, which saved_matches to update.
     */
    where: saved_matchesWhereUniqueInput
  }

  /**
   * saved_matches updateMany
   */
  export type saved_matchesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saved_matches.
     */
    data: XOR<saved_matchesUpdateManyMutationInput, saved_matchesUncheckedUpdateManyInput>
    /**
     * Filter which saved_matches to update
     */
    where?: saved_matchesWhereInput
    /**
     * Limit how many saved_matches to update.
     */
    limit?: number
  }

  /**
   * saved_matches updateManyAndReturn
   */
  export type saved_matchesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * The data used to update saved_matches.
     */
    data: XOR<saved_matchesUpdateManyMutationInput, saved_matchesUncheckedUpdateManyInput>
    /**
     * Filter which saved_matches to update
     */
    where?: saved_matchesWhereInput
    /**
     * Limit how many saved_matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * saved_matches upsert
   */
  export type saved_matchesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * The filter to search for the saved_matches to update in case it exists.
     */
    where: saved_matchesWhereUniqueInput
    /**
     * In case the saved_matches found by the `where` argument doesn't exist, create a new saved_matches with this data.
     */
    create: XOR<saved_matchesCreateInput, saved_matchesUncheckedCreateInput>
    /**
     * In case the saved_matches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saved_matchesUpdateInput, saved_matchesUncheckedUpdateInput>
  }

  /**
   * saved_matches delete
   */
  export type saved_matchesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    /**
     * Filter which saved_matches to delete.
     */
    where: saved_matchesWhereUniqueInput
  }

  /**
   * saved_matches deleteMany
   */
  export type saved_matchesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saved_matches to delete
     */
    where?: saved_matchesWhereInput
    /**
     * Limit how many saved_matches to delete.
     */
    limit?: number
  }

  /**
   * saved_matches without action
   */
  export type saved_matchesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    name: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    saved_matches?: boolean | users$saved_matchesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saved_matches?: boolean | users$saved_matchesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      saved_matches: Prisma.$saved_matchesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saved_matches<T extends users$saved_matchesArgs<ExtArgs> = {}>(args?: Subset<T, users$saved_matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saved_matchesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.saved_matches
   */
  export type users$saved_matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saved_matches
     */
    select?: saved_matchesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saved_matches
     */
    omit?: saved_matchesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saved_matchesInclude<ExtArgs> | null
    where?: saved_matchesWhereInput
    orderBy?: saved_matchesOrderByWithRelationInput | saved_matchesOrderByWithRelationInput[]
    cursor?: saved_matchesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Saved_matchesScalarFieldEnum | Saved_matchesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Saved_matchesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    matchId: 'matchId',
    summonerName: 'summonerName',
    championName: 'championName',
    result: 'result',
    gameType: 'gameType',
    gameDuration: 'gameDuration',
    goldPerMinute: 'goldPerMinute',
    kills: 'kills',
    deaths: 'deaths',
    assists: 'assists',
    date: 'date',
    teammates: 'teammates',
    items: 'items',
    damageDealt: 'damageDealt',
    damageTaken: 'damageTaken',
    visionScore: 'visionScore',
    cs: 'cs',
    enemyTeam: 'enemyTeam'
  };

  export type Saved_matchesScalarFieldEnum = (typeof Saved_matchesScalarFieldEnum)[keyof typeof Saved_matchesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type saved_matchesWhereInput = {
    AND?: saved_matchesWhereInput | saved_matchesWhereInput[]
    OR?: saved_matchesWhereInput[]
    NOT?: saved_matchesWhereInput | saved_matchesWhereInput[]
    id?: StringFilter<"saved_matches"> | string
    userId?: StringFilter<"saved_matches"> | string
    matchId?: StringFilter<"saved_matches"> | string
    summonerName?: StringFilter<"saved_matches"> | string
    championName?: StringFilter<"saved_matches"> | string
    result?: StringFilter<"saved_matches"> | string
    gameType?: StringFilter<"saved_matches"> | string
    gameDuration?: IntFilter<"saved_matches"> | number
    goldPerMinute?: IntFilter<"saved_matches"> | number
    kills?: IntFilter<"saved_matches"> | number
    deaths?: IntFilter<"saved_matches"> | number
    assists?: IntFilter<"saved_matches"> | number
    date?: DateTimeFilter<"saved_matches"> | Date | string
    teammates?: JsonFilter<"saved_matches">
    items?: JsonNullableFilter<"saved_matches">
    damageDealt?: IntNullableFilter<"saved_matches"> | number | null
    damageTaken?: IntNullableFilter<"saved_matches"> | number | null
    visionScore?: IntNullableFilter<"saved_matches"> | number | null
    cs?: IntNullableFilter<"saved_matches"> | number | null
    enemyTeam?: JsonNullableFilter<"saved_matches">
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type saved_matchesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    summonerName?: SortOrder
    championName?: SortOrder
    result?: SortOrder
    gameType?: SortOrder
    gameDuration?: SortOrder
    goldPerMinute?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    date?: SortOrder
    teammates?: SortOrder
    items?: SortOrderInput | SortOrder
    damageDealt?: SortOrderInput | SortOrder
    damageTaken?: SortOrderInput | SortOrder
    visionScore?: SortOrderInput | SortOrder
    cs?: SortOrderInput | SortOrder
    enemyTeam?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type saved_matchesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: saved_matchesWhereInput | saved_matchesWhereInput[]
    OR?: saved_matchesWhereInput[]
    NOT?: saved_matchesWhereInput | saved_matchesWhereInput[]
    userId?: StringFilter<"saved_matches"> | string
    matchId?: StringFilter<"saved_matches"> | string
    summonerName?: StringFilter<"saved_matches"> | string
    championName?: StringFilter<"saved_matches"> | string
    result?: StringFilter<"saved_matches"> | string
    gameType?: StringFilter<"saved_matches"> | string
    gameDuration?: IntFilter<"saved_matches"> | number
    goldPerMinute?: IntFilter<"saved_matches"> | number
    kills?: IntFilter<"saved_matches"> | number
    deaths?: IntFilter<"saved_matches"> | number
    assists?: IntFilter<"saved_matches"> | number
    date?: DateTimeFilter<"saved_matches"> | Date | string
    teammates?: JsonFilter<"saved_matches">
    items?: JsonNullableFilter<"saved_matches">
    damageDealt?: IntNullableFilter<"saved_matches"> | number | null
    damageTaken?: IntNullableFilter<"saved_matches"> | number | null
    visionScore?: IntNullableFilter<"saved_matches"> | number | null
    cs?: IntNullableFilter<"saved_matches"> | number | null
    enemyTeam?: JsonNullableFilter<"saved_matches">
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type saved_matchesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    summonerName?: SortOrder
    championName?: SortOrder
    result?: SortOrder
    gameType?: SortOrder
    gameDuration?: SortOrder
    goldPerMinute?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    date?: SortOrder
    teammates?: SortOrder
    items?: SortOrderInput | SortOrder
    damageDealt?: SortOrderInput | SortOrder
    damageTaken?: SortOrderInput | SortOrder
    visionScore?: SortOrderInput | SortOrder
    cs?: SortOrderInput | SortOrder
    enemyTeam?: SortOrderInput | SortOrder
    _count?: saved_matchesCountOrderByAggregateInput
    _avg?: saved_matchesAvgOrderByAggregateInput
    _max?: saved_matchesMaxOrderByAggregateInput
    _min?: saved_matchesMinOrderByAggregateInput
    _sum?: saved_matchesSumOrderByAggregateInput
  }

  export type saved_matchesScalarWhereWithAggregatesInput = {
    AND?: saved_matchesScalarWhereWithAggregatesInput | saved_matchesScalarWhereWithAggregatesInput[]
    OR?: saved_matchesScalarWhereWithAggregatesInput[]
    NOT?: saved_matchesScalarWhereWithAggregatesInput | saved_matchesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"saved_matches"> | string
    userId?: StringWithAggregatesFilter<"saved_matches"> | string
    matchId?: StringWithAggregatesFilter<"saved_matches"> | string
    summonerName?: StringWithAggregatesFilter<"saved_matches"> | string
    championName?: StringWithAggregatesFilter<"saved_matches"> | string
    result?: StringWithAggregatesFilter<"saved_matches"> | string
    gameType?: StringWithAggregatesFilter<"saved_matches"> | string
    gameDuration?: IntWithAggregatesFilter<"saved_matches"> | number
    goldPerMinute?: IntWithAggregatesFilter<"saved_matches"> | number
    kills?: IntWithAggregatesFilter<"saved_matches"> | number
    deaths?: IntWithAggregatesFilter<"saved_matches"> | number
    assists?: IntWithAggregatesFilter<"saved_matches"> | number
    date?: DateTimeWithAggregatesFilter<"saved_matches"> | Date | string
    teammates?: JsonWithAggregatesFilter<"saved_matches">
    items?: JsonNullableWithAggregatesFilter<"saved_matches">
    damageDealt?: IntNullableWithAggregatesFilter<"saved_matches"> | number | null
    damageTaken?: IntNullableWithAggregatesFilter<"saved_matches"> | number | null
    visionScore?: IntNullableWithAggregatesFilter<"saved_matches"> | number | null
    cs?: IntNullableWithAggregatesFilter<"saved_matches"> | number | null
    enemyTeam?: JsonNullableWithAggregatesFilter<"saved_matches">
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    saved_matches?: Saved_matchesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    saved_matches?: saved_matchesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    saved_matches?: Saved_matchesListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type saved_matchesCreateInput = {
    id?: string
    matchId: string
    summonerName: string
    championName: string
    result: string
    gameType: string
    gameDuration: number
    goldPerMinute: number
    kills: number
    deaths: number
    assists: number
    date?: Date | string
    teammates: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: number | null
    damageTaken?: number | null
    visionScore?: number | null
    cs?: number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
    users: usersCreateNestedOneWithoutSaved_matchesInput
  }

  export type saved_matchesUncheckedCreateInput = {
    id?: string
    userId: string
    matchId: string
    summonerName: string
    championName: string
    result: string
    gameType: string
    gameDuration: number
    goldPerMinute: number
    kills: number
    deaths: number
    assists: number
    date?: Date | string
    teammates: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: number | null
    damageTaken?: number | null
    visionScore?: number | null
    cs?: number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    summonerName?: StringFieldUpdateOperationsInput | string
    championName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    gameDuration?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teammates?: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: NullableIntFieldUpdateOperationsInput | number | null
    damageTaken?: NullableIntFieldUpdateOperationsInput | number | null
    visionScore?: NullableIntFieldUpdateOperationsInput | number | null
    cs?: NullableIntFieldUpdateOperationsInput | number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
    users?: usersUpdateOneRequiredWithoutSaved_matchesNestedInput
  }

  export type saved_matchesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    summonerName?: StringFieldUpdateOperationsInput | string
    championName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    gameDuration?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teammates?: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: NullableIntFieldUpdateOperationsInput | number | null
    damageTaken?: NullableIntFieldUpdateOperationsInput | number | null
    visionScore?: NullableIntFieldUpdateOperationsInput | number | null
    cs?: NullableIntFieldUpdateOperationsInput | number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesCreateManyInput = {
    id?: string
    userId: string
    matchId: string
    summonerName: string
    championName: string
    result: string
    gameType: string
    gameDuration: number
    goldPerMinute: number
    kills: number
    deaths: number
    assists: number
    date?: Date | string
    teammates: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: number | null
    damageTaken?: number | null
    visionScore?: number | null
    cs?: number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    summonerName?: StringFieldUpdateOperationsInput | string
    championName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    gameDuration?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teammates?: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: NullableIntFieldUpdateOperationsInput | number | null
    damageTaken?: NullableIntFieldUpdateOperationsInput | number | null
    visionScore?: NullableIntFieldUpdateOperationsInput | number | null
    cs?: NullableIntFieldUpdateOperationsInput | number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    summonerName?: StringFieldUpdateOperationsInput | string
    championName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    gameDuration?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teammates?: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: NullableIntFieldUpdateOperationsInput | number | null
    damageTaken?: NullableIntFieldUpdateOperationsInput | number | null
    visionScore?: NullableIntFieldUpdateOperationsInput | number | null
    cs?: NullableIntFieldUpdateOperationsInput | number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type usersCreateInput = {
    id: string
    email: string
    name?: string | null
    saved_matches?: saved_matchesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    email: string
    name?: string | null
    saved_matches?: saved_matchesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    saved_matches?: saved_matchesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    saved_matches?: saved_matchesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    email: string
    name?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type saved_matchesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    summonerName?: SortOrder
    championName?: SortOrder
    result?: SortOrder
    gameType?: SortOrder
    gameDuration?: SortOrder
    goldPerMinute?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    date?: SortOrder
    teammates?: SortOrder
    items?: SortOrder
    damageDealt?: SortOrder
    damageTaken?: SortOrder
    visionScore?: SortOrder
    cs?: SortOrder
    enemyTeam?: SortOrder
  }

  export type saved_matchesAvgOrderByAggregateInput = {
    gameDuration?: SortOrder
    goldPerMinute?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damageDealt?: SortOrder
    damageTaken?: SortOrder
    visionScore?: SortOrder
    cs?: SortOrder
  }

  export type saved_matchesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    summonerName?: SortOrder
    championName?: SortOrder
    result?: SortOrder
    gameType?: SortOrder
    gameDuration?: SortOrder
    goldPerMinute?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    date?: SortOrder
    damageDealt?: SortOrder
    damageTaken?: SortOrder
    visionScore?: SortOrder
    cs?: SortOrder
  }

  export type saved_matchesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    summonerName?: SortOrder
    championName?: SortOrder
    result?: SortOrder
    gameType?: SortOrder
    gameDuration?: SortOrder
    goldPerMinute?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    date?: SortOrder
    damageDealt?: SortOrder
    damageTaken?: SortOrder
    visionScore?: SortOrder
    cs?: SortOrder
  }

  export type saved_matchesSumOrderByAggregateInput = {
    gameDuration?: SortOrder
    goldPerMinute?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    assists?: SortOrder
    damageDealt?: SortOrder
    damageTaken?: SortOrder
    visionScore?: SortOrder
    cs?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type Saved_matchesListRelationFilter = {
    every?: saved_matchesWhereInput
    some?: saved_matchesWhereInput
    none?: saved_matchesWhereInput
  }

  export type saved_matchesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
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

  export type usersCreateNestedOneWithoutSaved_matchesInput = {
    create?: XOR<usersCreateWithoutSaved_matchesInput, usersUncheckedCreateWithoutSaved_matchesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_matchesInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneRequiredWithoutSaved_matchesNestedInput = {
    create?: XOR<usersCreateWithoutSaved_matchesInput, usersUncheckedCreateWithoutSaved_matchesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSaved_matchesInput
    upsert?: usersUpsertWithoutSaved_matchesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSaved_matchesInput, usersUpdateWithoutSaved_matchesInput>, usersUncheckedUpdateWithoutSaved_matchesInput>
  }

  export type saved_matchesCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_matchesCreateWithoutUsersInput, saved_matchesUncheckedCreateWithoutUsersInput> | saved_matchesCreateWithoutUsersInput[] | saved_matchesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_matchesCreateOrConnectWithoutUsersInput | saved_matchesCreateOrConnectWithoutUsersInput[]
    createMany?: saved_matchesCreateManyUsersInputEnvelope
    connect?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
  }

  export type saved_matchesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<saved_matchesCreateWithoutUsersInput, saved_matchesUncheckedCreateWithoutUsersInput> | saved_matchesCreateWithoutUsersInput[] | saved_matchesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_matchesCreateOrConnectWithoutUsersInput | saved_matchesCreateOrConnectWithoutUsersInput[]
    createMany?: saved_matchesCreateManyUsersInputEnvelope
    connect?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type saved_matchesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_matchesCreateWithoutUsersInput, saved_matchesUncheckedCreateWithoutUsersInput> | saved_matchesCreateWithoutUsersInput[] | saved_matchesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_matchesCreateOrConnectWithoutUsersInput | saved_matchesCreateOrConnectWithoutUsersInput[]
    upsert?: saved_matchesUpsertWithWhereUniqueWithoutUsersInput | saved_matchesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_matchesCreateManyUsersInputEnvelope
    set?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
    disconnect?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
    delete?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
    connect?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
    update?: saved_matchesUpdateWithWhereUniqueWithoutUsersInput | saved_matchesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_matchesUpdateManyWithWhereWithoutUsersInput | saved_matchesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_matchesScalarWhereInput | saved_matchesScalarWhereInput[]
  }

  export type saved_matchesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<saved_matchesCreateWithoutUsersInput, saved_matchesUncheckedCreateWithoutUsersInput> | saved_matchesCreateWithoutUsersInput[] | saved_matchesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: saved_matchesCreateOrConnectWithoutUsersInput | saved_matchesCreateOrConnectWithoutUsersInput[]
    upsert?: saved_matchesUpsertWithWhereUniqueWithoutUsersInput | saved_matchesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: saved_matchesCreateManyUsersInputEnvelope
    set?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
    disconnect?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
    delete?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
    connect?: saved_matchesWhereUniqueInput | saved_matchesWhereUniqueInput[]
    update?: saved_matchesUpdateWithWhereUniqueWithoutUsersInput | saved_matchesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: saved_matchesUpdateManyWithWhereWithoutUsersInput | saved_matchesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: saved_matchesScalarWhereInput | saved_matchesScalarWhereInput[]
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type usersCreateWithoutSaved_matchesInput = {
    id: string
    email: string
    name?: string | null
  }

  export type usersUncheckedCreateWithoutSaved_matchesInput = {
    id: string
    email: string
    name?: string | null
  }

  export type usersCreateOrConnectWithoutSaved_matchesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSaved_matchesInput, usersUncheckedCreateWithoutSaved_matchesInput>
  }

  export type usersUpsertWithoutSaved_matchesInput = {
    update: XOR<usersUpdateWithoutSaved_matchesInput, usersUncheckedUpdateWithoutSaved_matchesInput>
    create: XOR<usersCreateWithoutSaved_matchesInput, usersUncheckedCreateWithoutSaved_matchesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSaved_matchesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSaved_matchesInput, usersUncheckedUpdateWithoutSaved_matchesInput>
  }

  export type usersUpdateWithoutSaved_matchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutSaved_matchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saved_matchesCreateWithoutUsersInput = {
    id?: string
    matchId: string
    summonerName: string
    championName: string
    result: string
    gameType: string
    gameDuration: number
    goldPerMinute: number
    kills: number
    deaths: number
    assists: number
    date?: Date | string
    teammates: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: number | null
    damageTaken?: number | null
    visionScore?: number | null
    cs?: number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesUncheckedCreateWithoutUsersInput = {
    id?: string
    matchId: string
    summonerName: string
    championName: string
    result: string
    gameType: string
    gameDuration: number
    goldPerMinute: number
    kills: number
    deaths: number
    assists: number
    date?: Date | string
    teammates: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: number | null
    damageTaken?: number | null
    visionScore?: number | null
    cs?: number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesCreateOrConnectWithoutUsersInput = {
    where: saved_matchesWhereUniqueInput
    create: XOR<saved_matchesCreateWithoutUsersInput, saved_matchesUncheckedCreateWithoutUsersInput>
  }

  export type saved_matchesCreateManyUsersInputEnvelope = {
    data: saved_matchesCreateManyUsersInput | saved_matchesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type saved_matchesUpsertWithWhereUniqueWithoutUsersInput = {
    where: saved_matchesWhereUniqueInput
    update: XOR<saved_matchesUpdateWithoutUsersInput, saved_matchesUncheckedUpdateWithoutUsersInput>
    create: XOR<saved_matchesCreateWithoutUsersInput, saved_matchesUncheckedCreateWithoutUsersInput>
  }

  export type saved_matchesUpdateWithWhereUniqueWithoutUsersInput = {
    where: saved_matchesWhereUniqueInput
    data: XOR<saved_matchesUpdateWithoutUsersInput, saved_matchesUncheckedUpdateWithoutUsersInput>
  }

  export type saved_matchesUpdateManyWithWhereWithoutUsersInput = {
    where: saved_matchesScalarWhereInput
    data: XOR<saved_matchesUpdateManyMutationInput, saved_matchesUncheckedUpdateManyWithoutUsersInput>
  }

  export type saved_matchesScalarWhereInput = {
    AND?: saved_matchesScalarWhereInput | saved_matchesScalarWhereInput[]
    OR?: saved_matchesScalarWhereInput[]
    NOT?: saved_matchesScalarWhereInput | saved_matchesScalarWhereInput[]
    id?: StringFilter<"saved_matches"> | string
    userId?: StringFilter<"saved_matches"> | string
    matchId?: StringFilter<"saved_matches"> | string
    summonerName?: StringFilter<"saved_matches"> | string
    championName?: StringFilter<"saved_matches"> | string
    result?: StringFilter<"saved_matches"> | string
    gameType?: StringFilter<"saved_matches"> | string
    gameDuration?: IntFilter<"saved_matches"> | number
    goldPerMinute?: IntFilter<"saved_matches"> | number
    kills?: IntFilter<"saved_matches"> | number
    deaths?: IntFilter<"saved_matches"> | number
    assists?: IntFilter<"saved_matches"> | number
    date?: DateTimeFilter<"saved_matches"> | Date | string
    teammates?: JsonFilter<"saved_matches">
    items?: JsonNullableFilter<"saved_matches">
    damageDealt?: IntNullableFilter<"saved_matches"> | number | null
    damageTaken?: IntNullableFilter<"saved_matches"> | number | null
    visionScore?: IntNullableFilter<"saved_matches"> | number | null
    cs?: IntNullableFilter<"saved_matches"> | number | null
    enemyTeam?: JsonNullableFilter<"saved_matches">
  }

  export type saved_matchesCreateManyUsersInput = {
    id?: string
    matchId: string
    summonerName: string
    championName: string
    result: string
    gameType: string
    gameDuration: number
    goldPerMinute: number
    kills: number
    deaths: number
    assists: number
    date?: Date | string
    teammates: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: number | null
    damageTaken?: number | null
    visionScore?: number | null
    cs?: number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    summonerName?: StringFieldUpdateOperationsInput | string
    championName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    gameDuration?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teammates?: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: NullableIntFieldUpdateOperationsInput | number | null
    damageTaken?: NullableIntFieldUpdateOperationsInput | number | null
    visionScore?: NullableIntFieldUpdateOperationsInput | number | null
    cs?: NullableIntFieldUpdateOperationsInput | number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    summonerName?: StringFieldUpdateOperationsInput | string
    championName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    gameDuration?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teammates?: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: NullableIntFieldUpdateOperationsInput | number | null
    damageTaken?: NullableIntFieldUpdateOperationsInput | number | null
    visionScore?: NullableIntFieldUpdateOperationsInput | number | null
    cs?: NullableIntFieldUpdateOperationsInput | number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
  }

  export type saved_matchesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    summonerName?: StringFieldUpdateOperationsInput | string
    championName?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    gameDuration?: IntFieldUpdateOperationsInput | number
    goldPerMinute?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    assists?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    teammates?: JsonNullValueInput | InputJsonValue
    items?: NullableJsonNullValueInput | InputJsonValue
    damageDealt?: NullableIntFieldUpdateOperationsInput | number | null
    damageTaken?: NullableIntFieldUpdateOperationsInput | number | null
    visionScore?: NullableIntFieldUpdateOperationsInput | number | null
    cs?: NullableIntFieldUpdateOperationsInput | number | null
    enemyTeam?: NullableJsonNullValueInput | InputJsonValue
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
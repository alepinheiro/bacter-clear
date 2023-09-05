
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tags
 * 
 */
export type Tags = $Result.DefaultSelection<Prisma.$TagsPayload>
/**
 * Model Counters
 * 
 */
export type Counters = $Result.DefaultSelection<Prisma.$CountersPayload>
/**
 * Model GroupListSubscriber
 * 
 */
export type GroupListSubscriber = $Result.DefaultSelection<Prisma.$GroupListSubscriberPayload>
/**
 * Model VoteBanVotes
 * 
 */
export type VoteBanVotes = $Result.DefaultSelection<Prisma.$VoteBanVotesPayload>
/**
 * Model ContactFormsToSent
 * 
 */
export type ContactFormsToSent = $Result.DefaultSelection<Prisma.$ContactFormsToSentPayload>
/**
 * Model SendTo
 * 
 */
export type SendTo = $Result.DefaultSelection<Prisma.$SendToPayload>
/**
 * Model Jailsinho
 * 
 */
export type Jailsinho = $Result.DefaultSelection<Prisma.$JailsinhoPayload>
/**
 * Model PrivateChats
 * 
 */
export type PrivateChats = $Result.DefaultSelection<Prisma.$PrivateChatsPayload>
/**
 * Model GroupChats
 * 
 */
export type GroupChats = $Result.DefaultSelection<Prisma.$GroupChatsPayload>
/**
 * Model GroupList
 * 
 */
export type GroupList = $Result.DefaultSelection<Prisma.$GroupListPayload>
/**
 * Model VoteBanPoll
 * 
 */
export type VoteBanPoll = $Result.DefaultSelection<Prisma.$VoteBanPollPayload>
/**
 * Model ContactForms
 * 
 */
export type ContactForms = $Result.DefaultSelection<Prisma.$ContactFormsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Jailsinhos
 * const jailsinhos = await prisma.jailsinho.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Jailsinhos
   * const jailsinhos = await prisma.jailsinho.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.jailsinho`: Exposes CRUD operations for the **Jailsinho** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jailsinhos
    * const jailsinhos = await prisma.jailsinho.findMany()
    * ```
    */
  get jailsinho(): Prisma.JailsinhoDelegate<ExtArgs>;

  /**
   * `prisma.privateChats`: Exposes CRUD operations for the **PrivateChats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateChats
    * const privateChats = await prisma.privateChats.findMany()
    * ```
    */
  get privateChats(): Prisma.PrivateChatsDelegate<ExtArgs>;

  /**
   * `prisma.groupChats`: Exposes CRUD operations for the **GroupChats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupChats
    * const groupChats = await prisma.groupChats.findMany()
    * ```
    */
  get groupChats(): Prisma.GroupChatsDelegate<ExtArgs>;

  /**
   * `prisma.groupList`: Exposes CRUD operations for the **GroupList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupLists
    * const groupLists = await prisma.groupList.findMany()
    * ```
    */
  get groupList(): Prisma.GroupListDelegate<ExtArgs>;

  /**
   * `prisma.voteBanPoll`: Exposes CRUD operations for the **VoteBanPoll** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoteBanPolls
    * const voteBanPolls = await prisma.voteBanPoll.findMany()
    * ```
    */
  get voteBanPoll(): Prisma.VoteBanPollDelegate<ExtArgs>;

  /**
   * `prisma.contactForms`: Exposes CRUD operations for the **ContactForms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactForms
    * const contactForms = await prisma.contactForms.findMany()
    * ```
    */
  get contactForms(): Prisma.ContactFormsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Jailsinho: 'Jailsinho',
    PrivateChats: 'PrivateChats',
    GroupChats: 'GroupChats',
    GroupList: 'GroupList',
    VoteBanPoll: 'VoteBanPoll',
    ContactForms: 'ContactForms'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'jailsinho' | 'privateChats' | 'groupChats' | 'groupList' | 'voteBanPoll' | 'contactForms'
      txIsolationLevel: never
    },
    model: {
      Jailsinho: {
        payload: Prisma.$JailsinhoPayload<ExtArgs>
        fields: Prisma.JailsinhoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JailsinhoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JailsinhoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload>
          }
          findFirst: {
            args: Prisma.JailsinhoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JailsinhoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload>
          }
          findMany: {
            args: Prisma.JailsinhoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload>[]
          }
          create: {
            args: Prisma.JailsinhoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload>
          }
          createMany: {
            args: Prisma.JailsinhoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JailsinhoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload>
          }
          update: {
            args: Prisma.JailsinhoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload>
          }
          deleteMany: {
            args: Prisma.JailsinhoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JailsinhoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JailsinhoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JailsinhoPayload>
          }
          aggregate: {
            args: Prisma.JailsinhoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJailsinho>
          }
          groupBy: {
            args: Prisma.JailsinhoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JailsinhoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.JailsinhoFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.JailsinhoAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.JailsinhoCountArgs<ExtArgs>,
            result: $Utils.Optional<JailsinhoCountAggregateOutputType> | number
          }
        }
      }
      PrivateChats: {
        payload: Prisma.$PrivateChatsPayload<ExtArgs>
        fields: Prisma.PrivateChatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateChatsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateChatsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload>
          }
          findFirst: {
            args: Prisma.PrivateChatsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateChatsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload>
          }
          findMany: {
            args: Prisma.PrivateChatsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload>[]
          }
          create: {
            args: Prisma.PrivateChatsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload>
          }
          createMany: {
            args: Prisma.PrivateChatsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PrivateChatsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload>
          }
          update: {
            args: Prisma.PrivateChatsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload>
          }
          deleteMany: {
            args: Prisma.PrivateChatsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateChatsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PrivateChatsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PrivateChatsPayload>
          }
          aggregate: {
            args: Prisma.PrivateChatsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePrivateChats>
          }
          groupBy: {
            args: Prisma.PrivateChatsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PrivateChatsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PrivateChatsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PrivateChatsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PrivateChatsCountArgs<ExtArgs>,
            result: $Utils.Optional<PrivateChatsCountAggregateOutputType> | number
          }
        }
      }
      GroupChats: {
        payload: Prisma.$GroupChatsPayload<ExtArgs>
        fields: Prisma.GroupChatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupChatsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupChatsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload>
          }
          findFirst: {
            args: Prisma.GroupChatsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupChatsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload>
          }
          findMany: {
            args: Prisma.GroupChatsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload>[]
          }
          create: {
            args: Prisma.GroupChatsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload>
          }
          createMany: {
            args: Prisma.GroupChatsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupChatsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload>
          }
          update: {
            args: Prisma.GroupChatsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload>
          }
          deleteMany: {
            args: Prisma.GroupChatsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupChatsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupChatsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupChatsPayload>
          }
          aggregate: {
            args: Prisma.GroupChatsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupChats>
          }
          groupBy: {
            args: Prisma.GroupChatsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupChatsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroupChatsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroupChatsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.GroupChatsCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupChatsCountAggregateOutputType> | number
          }
        }
      }
      GroupList: {
        payload: Prisma.$GroupListPayload<ExtArgs>
        fields: Prisma.GroupListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload>
          }
          findFirst: {
            args: Prisma.GroupListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload>
          }
          findMany: {
            args: Prisma.GroupListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload>[]
          }
          create: {
            args: Prisma.GroupListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload>
          }
          createMany: {
            args: Prisma.GroupListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload>
          }
          update: {
            args: Prisma.GroupListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload>
          }
          deleteMany: {
            args: Prisma.GroupListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupListPayload>
          }
          aggregate: {
            args: Prisma.GroupListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupList>
          }
          groupBy: {
            args: Prisma.GroupListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupListGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GroupListFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.GroupListAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.GroupListCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupListCountAggregateOutputType> | number
          }
        }
      }
      VoteBanPoll: {
        payload: Prisma.$VoteBanPollPayload<ExtArgs>
        fields: Prisma.VoteBanPollFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteBanPollFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteBanPollFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload>
          }
          findFirst: {
            args: Prisma.VoteBanPollFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteBanPollFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload>
          }
          findMany: {
            args: Prisma.VoteBanPollFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload>[]
          }
          create: {
            args: Prisma.VoteBanPollCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload>
          }
          createMany: {
            args: Prisma.VoteBanPollCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VoteBanPollDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload>
          }
          update: {
            args: Prisma.VoteBanPollUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload>
          }
          deleteMany: {
            args: Prisma.VoteBanPollDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VoteBanPollUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VoteBanPollUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VoteBanPollPayload>
          }
          aggregate: {
            args: Prisma.VoteBanPollAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVoteBanPoll>
          }
          groupBy: {
            args: Prisma.VoteBanPollGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VoteBanPollGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VoteBanPollFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.VoteBanPollAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.VoteBanPollCountArgs<ExtArgs>,
            result: $Utils.Optional<VoteBanPollCountAggregateOutputType> | number
          }
        }
      }
      ContactForms: {
        payload: Prisma.$ContactFormsPayload<ExtArgs>
        fields: Prisma.ContactFormsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFormsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFormsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload>
          }
          findFirst: {
            args: Prisma.ContactFormsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFormsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload>
          }
          findMany: {
            args: Prisma.ContactFormsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload>[]
          }
          create: {
            args: Prisma.ContactFormsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload>
          }
          createMany: {
            args: Prisma.ContactFormsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactFormsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload>
          }
          update: {
            args: Prisma.ContactFormsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload>
          }
          deleteMany: {
            args: Prisma.ContactFormsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactFormsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactFormsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactFormsPayload>
          }
          aggregate: {
            args: Prisma.ContactFormsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContactForms>
          }
          groupBy: {
            args: Prisma.ContactFormsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactFormsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ContactFormsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ContactFormsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ContactFormsCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactFormsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
   * Models
   */

  /**
   * Model Tags
   */





  export type TagsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    superAdmin?: boolean
    notifyStart?: boolean
    user?: boolean
    admin?: boolean
    blocked?: boolean
    autoSticker?: boolean
    newsletter?: boolean
    autoMessage?: boolean
  }, ExtArgs["result"]["tags"]>

  export type TagsSelectScalar = {
    superAdmin?: boolean
    notifyStart?: boolean
    user?: boolean
    admin?: boolean
    blocked?: boolean
    autoSticker?: boolean
    newsletter?: boolean
    autoMessage?: boolean
  }


  export type $TagsPayload = {
    name: "Tags"
    objects: {}
    scalars: {
      superAdmin: boolean
      notifyStart: boolean
      user: boolean
      admin: boolean
      blocked: boolean
      autoSticker: boolean
      newsletter: boolean
      autoMessage: number
    }
    composites: {}
  }


  type TagsGetPayload<S extends boolean | null | undefined | TagsDefaultArgs> = $Result.GetResult<Prisma.$TagsPayload, S>





  /**
   * Fields of the Tags model
   */ 
  interface TagsFieldRefs {
    readonly superAdmin: FieldRef<"Tags", 'Boolean'>
    readonly notifyStart: FieldRef<"Tags", 'Boolean'>
    readonly user: FieldRef<"Tags", 'Boolean'>
    readonly admin: FieldRef<"Tags", 'Boolean'>
    readonly blocked: FieldRef<"Tags", 'Boolean'>
    readonly autoSticker: FieldRef<"Tags", 'Boolean'>
    readonly newsletter: FieldRef<"Tags", 'Boolean'>
    readonly autoMessage: FieldRef<"Tags", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Tags without action
   */
  export type TagsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tags
     */
    select?: TagsSelect<ExtArgs> | null
  }



  /**
   * Model Counters
   */





  export type CountersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    obrigado?: boolean
    teAmo?: boolean
    fodaSe?: boolean
    isqueiro?: boolean
    gay?: boolean
  }, ExtArgs["result"]["counters"]>

  export type CountersSelectScalar = {
    obrigado?: boolean
    teAmo?: boolean
    fodaSe?: boolean
    isqueiro?: boolean
    gay?: boolean
  }


  export type $CountersPayload = {
    name: "Counters"
    objects: {}
    scalars: {
      obrigado: number | null
      teAmo: number | null
      fodaSe: number | null
      isqueiro: number | null
      gay: number | null
    }
    composites: {}
  }


  type CountersGetPayload<S extends boolean | null | undefined | CountersDefaultArgs> = $Result.GetResult<Prisma.$CountersPayload, S>





  /**
   * Fields of the Counters model
   */ 
  interface CountersFieldRefs {
    readonly obrigado: FieldRef<"Counters", 'Int'>
    readonly teAmo: FieldRef<"Counters", 'Int'>
    readonly fodaSe: FieldRef<"Counters", 'Int'>
    readonly isqueiro: FieldRef<"Counters", 'Int'>
    readonly gay: FieldRef<"Counters", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Counters without action
   */
  export type CountersDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counters
     */
    select?: CountersSelect<ExtArgs> | null
  }



  /**
   * Model GroupListSubscriber
   */





  export type GroupListSubscriberSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    number?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["groupListSubscriber"]>

  export type GroupListSubscriberSelectScalar = {
    number?: boolean
    name?: boolean
    createdAt?: boolean
  }


  export type $GroupListSubscriberPayload = {
    name: "GroupListSubscriber"
    objects: {}
    scalars: {
      number: string
      name: string
      createdAt: Date
    }
    composites: {}
  }


  type GroupListSubscriberGetPayload<S extends boolean | null | undefined | GroupListSubscriberDefaultArgs> = $Result.GetResult<Prisma.$GroupListSubscriberPayload, S>





  /**
   * Fields of the GroupListSubscriber model
   */ 
  interface GroupListSubscriberFieldRefs {
    readonly number: FieldRef<"GroupListSubscriber", 'String'>
    readonly name: FieldRef<"GroupListSubscriber", 'String'>
    readonly createdAt: FieldRef<"GroupListSubscriber", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GroupListSubscriber without action
   */
  export type GroupListSubscriberDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupListSubscriber
     */
    select?: GroupListSubscriberSelect<ExtArgs> | null
  }



  /**
   * Model VoteBanVotes
   */





  export type VoteBanVotesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    voteType?: boolean
    voter?: boolean
  }, ExtArgs["result"]["voteBanVotes"]>

  export type VoteBanVotesSelectScalar = {
    voteType?: boolean
    voter?: boolean
  }


  export type $VoteBanVotesPayload = {
    name: "VoteBanVotes"
    objects: {}
    scalars: {
      voteType: boolean | null
      voter: string
    }
    composites: {}
  }


  type VoteBanVotesGetPayload<S extends boolean | null | undefined | VoteBanVotesDefaultArgs> = $Result.GetResult<Prisma.$VoteBanVotesPayload, S>





  /**
   * Fields of the VoteBanVotes model
   */ 
  interface VoteBanVotesFieldRefs {
    readonly voteType: FieldRef<"VoteBanVotes", 'Boolean'>
    readonly voter: FieldRef<"VoteBanVotes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * VoteBanVotes without action
   */
  export type VoteBanVotesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanVotes
     */
    select?: VoteBanVotesSelect<ExtArgs> | null
  }



  /**
   * Model ContactFormsToSent
   */





  export type ContactFormsToSentSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    phone?: boolean
    email?: boolean
    interest?: boolean
    hasSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactFormsToSent"]>

  export type ContactFormsToSentSelectScalar = {
    name?: boolean
    phone?: boolean
    email?: boolean
    interest?: boolean
    hasSent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ContactFormsToSentPayload = {
    name: "ContactFormsToSent"
    objects: {}
    scalars: {
      name: string
      phone: string
      email: string
      interest: string
      hasSent: boolean
      createdAt: Date
      updatedAt: Date
    }
    composites: {}
  }


  type ContactFormsToSentGetPayload<S extends boolean | null | undefined | ContactFormsToSentDefaultArgs> = $Result.GetResult<Prisma.$ContactFormsToSentPayload, S>





  /**
   * Fields of the ContactFormsToSent model
   */ 
  interface ContactFormsToSentFieldRefs {
    readonly name: FieldRef<"ContactFormsToSent", 'String'>
    readonly phone: FieldRef<"ContactFormsToSent", 'String'>
    readonly email: FieldRef<"ContactFormsToSent", 'String'>
    readonly interest: FieldRef<"ContactFormsToSent", 'String'>
    readonly hasSent: FieldRef<"ContactFormsToSent", 'Boolean'>
    readonly createdAt: FieldRef<"ContactFormsToSent", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactFormsToSent", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ContactFormsToSent without action
   */
  export type ContactFormsToSentDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactFormsToSent
     */
    select?: ContactFormsToSentSelect<ExtArgs> | null
  }



  /**
   * Model SendTo
   */





  export type SendToSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    chatId?: boolean
  }, ExtArgs["result"]["sendTo"]>

  export type SendToSelectScalar = {
    name?: boolean
    chatId?: boolean
  }


  export type $SendToPayload = {
    name: "SendTo"
    objects: {}
    scalars: {
      name: string
      chatId: string
    }
    composites: {}
  }


  type SendToGetPayload<S extends boolean | null | undefined | SendToDefaultArgs> = $Result.GetResult<Prisma.$SendToPayload, S>





  /**
   * Fields of the SendTo model
   */ 
  interface SendToFieldRefs {
    readonly name: FieldRef<"SendTo", 'String'>
    readonly chatId: FieldRef<"SendTo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SendTo without action
   */
  export type SendToDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SendTo
     */
    select?: SendToSelect<ExtArgs> | null
  }



  /**
   * Model Jailsinho
   */

  export type AggregateJailsinho = {
    _count: JailsinhoCountAggregateOutputType | null
    _avg: JailsinhoAvgAggregateOutputType | null
    _sum: JailsinhoSumAggregateOutputType | null
    _min: JailsinhoMinAggregateOutputType | null
    _max: JailsinhoMaxAggregateOutputType | null
  }

  export type JailsinhoAvgAggregateOutputType = {
    id: number | null
    totalChats: number | null
    totalCommandsExecuted: number | null
    totalMessagesReceived: number | null
  }

  export type JailsinhoSumAggregateOutputType = {
    id: number | null
    totalChats: number | null
    totalCommandsExecuted: number | null
    totalMessagesReceived: number | null
  }

  export type JailsinhoMinAggregateOutputType = {
    createdAt: Date | null
    dateTimeUptime: Date | null
    id: number | null
    maintenanceMode: boolean | null
    maxServerUptime: string | null
    totalChats: number | null
    totalCommandsExecuted: number | null
    totalMessagesReceived: number | null
    updatedAt: Date | null
  }

  export type JailsinhoMaxAggregateOutputType = {
    createdAt: Date | null
    dateTimeUptime: Date | null
    id: number | null
    maintenanceMode: boolean | null
    maxServerUptime: string | null
    totalChats: number | null
    totalCommandsExecuted: number | null
    totalMessagesReceived: number | null
    updatedAt: Date | null
  }

  export type JailsinhoCountAggregateOutputType = {
    createdAt: number
    dateTimeUptime: number
    id: number
    maintenanceMode: number
    maxServerUptime: number
    popularCommands: number
    totalChats: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    updatedAt: number
    _all: number
  }


  export type JailsinhoAvgAggregateInputType = {
    id?: true
    totalChats?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
  }

  export type JailsinhoSumAggregateInputType = {
    id?: true
    totalChats?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
  }

  export type JailsinhoMinAggregateInputType = {
    createdAt?: true
    dateTimeUptime?: true
    id?: true
    maintenanceMode?: true
    maxServerUptime?: true
    totalChats?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
    updatedAt?: true
  }

  export type JailsinhoMaxAggregateInputType = {
    createdAt?: true
    dateTimeUptime?: true
    id?: true
    maintenanceMode?: true
    maxServerUptime?: true
    totalChats?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
    updatedAt?: true
  }

  export type JailsinhoCountAggregateInputType = {
    createdAt?: true
    dateTimeUptime?: true
    id?: true
    maintenanceMode?: true
    maxServerUptime?: true
    popularCommands?: true
    totalChats?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
    updatedAt?: true
    _all?: true
  }

  export type JailsinhoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jailsinho to aggregate.
     */
    where?: JailsinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jailsinhos to fetch.
     */
    orderBy?: JailsinhoOrderByWithRelationInput | JailsinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JailsinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jailsinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jailsinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jailsinhos
    **/
    _count?: true | JailsinhoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JailsinhoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JailsinhoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JailsinhoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JailsinhoMaxAggregateInputType
  }

  export type GetJailsinhoAggregateType<T extends JailsinhoAggregateArgs> = {
        [P in keyof T & keyof AggregateJailsinho]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJailsinho[P]>
      : GetScalarType<T[P], AggregateJailsinho[P]>
  }




  export type JailsinhoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: JailsinhoWhereInput
    orderBy?: JailsinhoOrderByWithAggregationInput | JailsinhoOrderByWithAggregationInput[]
    by: JailsinhoScalarFieldEnum[] | JailsinhoScalarFieldEnum
    having?: JailsinhoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JailsinhoCountAggregateInputType | true
    _avg?: JailsinhoAvgAggregateInputType
    _sum?: JailsinhoSumAggregateInputType
    _min?: JailsinhoMinAggregateInputType
    _max?: JailsinhoMaxAggregateInputType
  }

  export type JailsinhoGroupByOutputType = {
    createdAt: Date
    dateTimeUptime: Date
    id: number
    maintenanceMode: boolean
    maxServerUptime: string | null
    popularCommands: JsonValue | null
    totalChats: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    updatedAt: Date
    _count: JailsinhoCountAggregateOutputType | null
    _avg: JailsinhoAvgAggregateOutputType | null
    _sum: JailsinhoSumAggregateOutputType | null
    _min: JailsinhoMinAggregateOutputType | null
    _max: JailsinhoMaxAggregateOutputType | null
  }

  type GetJailsinhoGroupByPayload<T extends JailsinhoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JailsinhoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JailsinhoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JailsinhoGroupByOutputType[P]>
            : GetScalarType<T[P], JailsinhoGroupByOutputType[P]>
        }
      >
    >


  export type JailsinhoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    counters?: boolean | CountersDefaultArgs<ExtArgs>
    dateTimeUptime?: boolean
    id?: boolean
    maintenanceMode?: boolean
    maxServerUptime?: boolean
    popularCommands?: boolean
    totalChats?: boolean
    totalCommandsExecuted?: boolean
    totalMessagesReceived?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["jailsinho"]>

  export type JailsinhoSelectScalar = {
    createdAt?: boolean
    dateTimeUptime?: boolean
    id?: boolean
    maintenanceMode?: boolean
    maxServerUptime?: boolean
    popularCommands?: boolean
    totalChats?: boolean
    totalCommandsExecuted?: boolean
    totalMessagesReceived?: boolean
    updatedAt?: boolean
  }

  export type JailsinhoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $JailsinhoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Jailsinho"
    objects: {}
    scalars: $Extensions.GetResult<{
      createdAt: Date
      dateTimeUptime: Date
      id: number
      maintenanceMode: boolean
      maxServerUptime: string | null
      popularCommands: Prisma.JsonValue | null
      totalChats: number
      totalCommandsExecuted: number
      totalMessagesReceived: number
      updatedAt: Date
    }, ExtArgs["result"]["jailsinho"]>
    composites: {
      counters: Prisma.$CountersPayload
    }
  }


  type JailsinhoGetPayload<S extends boolean | null | undefined | JailsinhoDefaultArgs> = $Result.GetResult<Prisma.$JailsinhoPayload, S>

  type JailsinhoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<JailsinhoFindManyArgs, 'select' | 'include'> & {
      select?: JailsinhoCountAggregateInputType | true
    }

  export interface JailsinhoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jailsinho'], meta: { name: 'Jailsinho' } }
    /**
     * Find zero or one Jailsinho that matches the filter.
     * @param {JailsinhoFindUniqueArgs} args - Arguments to find a Jailsinho
     * @example
     * // Get one Jailsinho
     * const jailsinho = await prisma.jailsinho.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JailsinhoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JailsinhoFindUniqueArgs<ExtArgs>>
    ): Prisma__JailsinhoClient<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Jailsinho that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JailsinhoFindUniqueOrThrowArgs} args - Arguments to find a Jailsinho
     * @example
     * // Get one Jailsinho
     * const jailsinho = await prisma.jailsinho.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JailsinhoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JailsinhoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JailsinhoClient<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Jailsinho that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JailsinhoFindFirstArgs} args - Arguments to find a Jailsinho
     * @example
     * // Get one Jailsinho
     * const jailsinho = await prisma.jailsinho.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JailsinhoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JailsinhoFindFirstArgs<ExtArgs>>
    ): Prisma__JailsinhoClient<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Jailsinho that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JailsinhoFindFirstOrThrowArgs} args - Arguments to find a Jailsinho
     * @example
     * // Get one Jailsinho
     * const jailsinho = await prisma.jailsinho.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JailsinhoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JailsinhoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JailsinhoClient<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Jailsinhos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JailsinhoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jailsinhos
     * const jailsinhos = await prisma.jailsinho.findMany()
     * 
     * // Get first 10 Jailsinhos
     * const jailsinhos = await prisma.jailsinho.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const jailsinhoWithCreatedAtOnly = await prisma.jailsinho.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends JailsinhoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JailsinhoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Jailsinho.
     * @param {JailsinhoCreateArgs} args - Arguments to create a Jailsinho.
     * @example
     * // Create one Jailsinho
     * const Jailsinho = await prisma.jailsinho.create({
     *   data: {
     *     // ... data to create a Jailsinho
     *   }
     * })
     * 
    **/
    create<T extends JailsinhoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JailsinhoCreateArgs<ExtArgs>>
    ): Prisma__JailsinhoClient<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Jailsinhos.
     *     @param {JailsinhoCreateManyArgs} args - Arguments to create many Jailsinhos.
     *     @example
     *     // Create many Jailsinhos
     *     const jailsinho = await prisma.jailsinho.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JailsinhoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JailsinhoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jailsinho.
     * @param {JailsinhoDeleteArgs} args - Arguments to delete one Jailsinho.
     * @example
     * // Delete one Jailsinho
     * const Jailsinho = await prisma.jailsinho.delete({
     *   where: {
     *     // ... filter to delete one Jailsinho
     *   }
     * })
     * 
    **/
    delete<T extends JailsinhoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JailsinhoDeleteArgs<ExtArgs>>
    ): Prisma__JailsinhoClient<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Jailsinho.
     * @param {JailsinhoUpdateArgs} args - Arguments to update one Jailsinho.
     * @example
     * // Update one Jailsinho
     * const jailsinho = await prisma.jailsinho.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JailsinhoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JailsinhoUpdateArgs<ExtArgs>>
    ): Prisma__JailsinhoClient<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Jailsinhos.
     * @param {JailsinhoDeleteManyArgs} args - Arguments to filter Jailsinhos to delete.
     * @example
     * // Delete a few Jailsinhos
     * const { count } = await prisma.jailsinho.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JailsinhoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JailsinhoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jailsinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JailsinhoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jailsinhos
     * const jailsinho = await prisma.jailsinho.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JailsinhoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JailsinhoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jailsinho.
     * @param {JailsinhoUpsertArgs} args - Arguments to update or create a Jailsinho.
     * @example
     * // Update or create a Jailsinho
     * const jailsinho = await prisma.jailsinho.upsert({
     *   create: {
     *     // ... data to create a Jailsinho
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jailsinho we want to update
     *   }
     * })
    **/
    upsert<T extends JailsinhoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JailsinhoUpsertArgs<ExtArgs>>
    ): Prisma__JailsinhoClient<$Result.GetResult<Prisma.$JailsinhoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Jailsinhos that matches the filter.
     * @param {JailsinhoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const jailsinho = await prisma.jailsinho.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: JailsinhoFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Jailsinho.
     * @param {JailsinhoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const jailsinho = await prisma.jailsinho.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: JailsinhoAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Jailsinhos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JailsinhoCountArgs} args - Arguments to filter Jailsinhos to count.
     * @example
     * // Count the number of Jailsinhos
     * const count = await prisma.jailsinho.count({
     *   where: {
     *     // ... the filter for the Jailsinhos we want to count
     *   }
     * })
    **/
    count<T extends JailsinhoCountArgs>(
      args?: Subset<T, JailsinhoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JailsinhoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jailsinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JailsinhoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JailsinhoAggregateArgs>(args: Subset<T, JailsinhoAggregateArgs>): Prisma.PrismaPromise<GetJailsinhoAggregateType<T>>

    /**
     * Group by Jailsinho.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JailsinhoGroupByArgs} args - Group by arguments.
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
      T extends JailsinhoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JailsinhoGroupByArgs['orderBy'] }
        : { orderBy?: JailsinhoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JailsinhoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJailsinhoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jailsinho model
   */
  readonly fields: JailsinhoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jailsinho.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JailsinhoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Jailsinho model
   */ 
  interface JailsinhoFieldRefs {
    readonly createdAt: FieldRef<"Jailsinho", 'DateTime'>
    readonly dateTimeUptime: FieldRef<"Jailsinho", 'DateTime'>
    readonly id: FieldRef<"Jailsinho", 'Int'>
    readonly maintenanceMode: FieldRef<"Jailsinho", 'Boolean'>
    readonly maxServerUptime: FieldRef<"Jailsinho", 'String'>
    readonly popularCommands: FieldRef<"Jailsinho", 'Json'>
    readonly totalChats: FieldRef<"Jailsinho", 'Int'>
    readonly totalCommandsExecuted: FieldRef<"Jailsinho", 'Int'>
    readonly totalMessagesReceived: FieldRef<"Jailsinho", 'Int'>
    readonly updatedAt: FieldRef<"Jailsinho", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Jailsinho findUnique
   */
  export type JailsinhoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * Filter, which Jailsinho to fetch.
     */
    where: JailsinhoWhereUniqueInput
  }


  /**
   * Jailsinho findUniqueOrThrow
   */
  export type JailsinhoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * Filter, which Jailsinho to fetch.
     */
    where: JailsinhoWhereUniqueInput
  }


  /**
   * Jailsinho findFirst
   */
  export type JailsinhoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * Filter, which Jailsinho to fetch.
     */
    where?: JailsinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jailsinhos to fetch.
     */
    orderBy?: JailsinhoOrderByWithRelationInput | JailsinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jailsinhos.
     */
    cursor?: JailsinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jailsinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jailsinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jailsinhos.
     */
    distinct?: JailsinhoScalarFieldEnum | JailsinhoScalarFieldEnum[]
  }


  /**
   * Jailsinho findFirstOrThrow
   */
  export type JailsinhoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * Filter, which Jailsinho to fetch.
     */
    where?: JailsinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jailsinhos to fetch.
     */
    orderBy?: JailsinhoOrderByWithRelationInput | JailsinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jailsinhos.
     */
    cursor?: JailsinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jailsinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jailsinhos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jailsinhos.
     */
    distinct?: JailsinhoScalarFieldEnum | JailsinhoScalarFieldEnum[]
  }


  /**
   * Jailsinho findMany
   */
  export type JailsinhoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * Filter, which Jailsinhos to fetch.
     */
    where?: JailsinhoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jailsinhos to fetch.
     */
    orderBy?: JailsinhoOrderByWithRelationInput | JailsinhoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jailsinhos.
     */
    cursor?: JailsinhoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jailsinhos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jailsinhos.
     */
    skip?: number
    distinct?: JailsinhoScalarFieldEnum | JailsinhoScalarFieldEnum[]
  }


  /**
   * Jailsinho create
   */
  export type JailsinhoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * The data needed to create a Jailsinho.
     */
    data: XOR<JailsinhoCreateInput, JailsinhoUncheckedCreateInput>
  }


  /**
   * Jailsinho createMany
   */
  export type JailsinhoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jailsinhos.
     */
    data: JailsinhoCreateManyInput | JailsinhoCreateManyInput[]
  }


  /**
   * Jailsinho update
   */
  export type JailsinhoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * The data needed to update a Jailsinho.
     */
    data: XOR<JailsinhoUpdateInput, JailsinhoUncheckedUpdateInput>
    /**
     * Choose, which Jailsinho to update.
     */
    where: JailsinhoWhereUniqueInput
  }


  /**
   * Jailsinho updateMany
   */
  export type JailsinhoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jailsinhos.
     */
    data: XOR<JailsinhoUpdateManyMutationInput, JailsinhoUncheckedUpdateManyInput>
    /**
     * Filter which Jailsinhos to update
     */
    where?: JailsinhoWhereInput
  }


  /**
   * Jailsinho upsert
   */
  export type JailsinhoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * The filter to search for the Jailsinho to update in case it exists.
     */
    where: JailsinhoWhereUniqueInput
    /**
     * In case the Jailsinho found by the `where` argument doesn't exist, create a new Jailsinho with this data.
     */
    create: XOR<JailsinhoCreateInput, JailsinhoUncheckedCreateInput>
    /**
     * In case the Jailsinho was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JailsinhoUpdateInput, JailsinhoUncheckedUpdateInput>
  }


  /**
   * Jailsinho delete
   */
  export type JailsinhoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
    /**
     * Filter which Jailsinho to delete.
     */
    where: JailsinhoWhereUniqueInput
  }


  /**
   * Jailsinho deleteMany
   */
  export type JailsinhoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jailsinhos to delete
     */
    where?: JailsinhoWhereInput
  }


  /**
   * Jailsinho findRaw
   */
  export type JailsinhoFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Jailsinho aggregateRaw
   */
  export type JailsinhoAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Jailsinho without action
   */
  export type JailsinhoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jailsinho
     */
    select?: JailsinhoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JailsinhoInclude<ExtArgs> | null
  }



  /**
   * Model PrivateChats
   */

  export type AggregatePrivateChats = {
    _count: PrivateChatsCountAggregateOutputType | null
    _avg: PrivateChatsAvgAggregateOutputType | null
    _sum: PrivateChatsSumAggregateOutputType | null
    _min: PrivateChatsMinAggregateOutputType | null
    _max: PrivateChatsMaxAggregateOutputType | null
  }

  export type PrivateChatsAvgAggregateOutputType = {
    timestamp: number | null
    totalCommandsExecuted: number | null
    totalMessagesReceived: number | null
  }

  export type PrivateChatsSumAggregateOutputType = {
    timestamp: number | null
    totalCommandsExecuted: number | null
    totalMessagesReceived: number | null
  }

  export type PrivateChatsMinAggregateOutputType = {
    createdAt: Date | null
    id: string | null
    chatId: string | null
    isGroup: boolean | null
    isReadOnly: boolean | null
    name: string | null
    timestamp: number | null
    totalCommandsExecuted: number | null
    totalMessagesReceived: number | null
    updatedAt: Date | null
  }

  export type PrivateChatsMaxAggregateOutputType = {
    createdAt: Date | null
    id: string | null
    chatId: string | null
    isGroup: boolean | null
    isReadOnly: boolean | null
    name: string | null
    timestamp: number | null
    totalCommandsExecuted: number | null
    totalMessagesReceived: number | null
    updatedAt: Date | null
  }

  export type PrivateChatsCountAggregateOutputType = {
    createdAt: number
    id: number
    chatId: number
    isGroup: number
    isReadOnly: number
    name: number
    popularCommands: number
    timestamp: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    updatedAt: number
    _all: number
  }


  export type PrivateChatsAvgAggregateInputType = {
    timestamp?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
  }

  export type PrivateChatsSumAggregateInputType = {
    timestamp?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
  }

  export type PrivateChatsMinAggregateInputType = {
    createdAt?: true
    id?: true
    chatId?: true
    isGroup?: true
    isReadOnly?: true
    name?: true
    timestamp?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
    updatedAt?: true
  }

  export type PrivateChatsMaxAggregateInputType = {
    createdAt?: true
    id?: true
    chatId?: true
    isGroup?: true
    isReadOnly?: true
    name?: true
    timestamp?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
    updatedAt?: true
  }

  export type PrivateChatsCountAggregateInputType = {
    createdAt?: true
    id?: true
    chatId?: true
    isGroup?: true
    isReadOnly?: true
    name?: true
    popularCommands?: true
    timestamp?: true
    totalCommandsExecuted?: true
    totalMessagesReceived?: true
    updatedAt?: true
    _all?: true
  }

  export type PrivateChatsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateChats to aggregate.
     */
    where?: PrivateChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatsOrderByWithRelationInput | PrivateChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateChats
    **/
    _count?: true | PrivateChatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrivateChatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrivateChatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateChatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateChatsMaxAggregateInputType
  }

  export type GetPrivateChatsAggregateType<T extends PrivateChatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateChats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateChats[P]>
      : GetScalarType<T[P], AggregatePrivateChats[P]>
  }




  export type PrivateChatsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PrivateChatsWhereInput
    orderBy?: PrivateChatsOrderByWithAggregationInput | PrivateChatsOrderByWithAggregationInput[]
    by: PrivateChatsScalarFieldEnum[] | PrivateChatsScalarFieldEnum
    having?: PrivateChatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateChatsCountAggregateInputType | true
    _avg?: PrivateChatsAvgAggregateInputType
    _sum?: PrivateChatsSumAggregateInputType
    _min?: PrivateChatsMinAggregateInputType
    _max?: PrivateChatsMaxAggregateInputType
  }

  export type PrivateChatsGroupByOutputType = {
    createdAt: Date
    id: string
    chatId: string
    isGroup: boolean
    isReadOnly: boolean
    name: string
    popularCommands: JsonValue | null
    timestamp: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    updatedAt: Date
    _count: PrivateChatsCountAggregateOutputType | null
    _avg: PrivateChatsAvgAggregateOutputType | null
    _sum: PrivateChatsSumAggregateOutputType | null
    _min: PrivateChatsMinAggregateOutputType | null
    _max: PrivateChatsMaxAggregateOutputType | null
  }

  type GetPrivateChatsGroupByPayload<T extends PrivateChatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateChatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateChatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateChatsGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateChatsGroupByOutputType[P]>
        }
      >
    >


  export type PrivateChatsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    createdAt?: boolean
    id?: boolean
    chatId?: boolean
    isGroup?: boolean
    isReadOnly?: boolean
    name?: boolean
    popularCommands?: boolean
    timestamp?: boolean
    totalCommandsExecuted?: boolean
    totalMessagesReceived?: boolean
    tags?: boolean | TagsDefaultArgs<ExtArgs>
    updatedAt?: boolean
  }, ExtArgs["result"]["privateChats"]>

  export type PrivateChatsSelectScalar = {
    createdAt?: boolean
    id?: boolean
    chatId?: boolean
    isGroup?: boolean
    isReadOnly?: boolean
    name?: boolean
    popularCommands?: boolean
    timestamp?: boolean
    totalCommandsExecuted?: boolean
    totalMessagesReceived?: boolean
    updatedAt?: boolean
  }

  export type PrivateChatsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $PrivateChatsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PrivateChats"
    objects: {}
    scalars: $Extensions.GetResult<{
      createdAt: Date
      id: string
      chatId: string
      isGroup: boolean
      isReadOnly: boolean
      name: string
      popularCommands: Prisma.JsonValue | null
      timestamp: number
      totalCommandsExecuted: number
      totalMessagesReceived: number
      updatedAt: Date
    }, ExtArgs["result"]["privateChats"]>
    composites: {
      tags: Prisma.$TagsPayload
    }
  }


  type PrivateChatsGetPayload<S extends boolean | null | undefined | PrivateChatsDefaultArgs> = $Result.GetResult<Prisma.$PrivateChatsPayload, S>

  type PrivateChatsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PrivateChatsFindManyArgs, 'select' | 'include'> & {
      select?: PrivateChatsCountAggregateInputType | true
    }

  export interface PrivateChatsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateChats'], meta: { name: 'PrivateChats' } }
    /**
     * Find zero or one PrivateChats that matches the filter.
     * @param {PrivateChatsFindUniqueArgs} args - Arguments to find a PrivateChats
     * @example
     * // Get one PrivateChats
     * const privateChats = await prisma.privateChats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrivateChatsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PrivateChatsFindUniqueArgs<ExtArgs>>
    ): Prisma__PrivateChatsClient<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PrivateChats that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PrivateChatsFindUniqueOrThrowArgs} args - Arguments to find a PrivateChats
     * @example
     * // Get one PrivateChats
     * const privateChats = await prisma.privateChats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PrivateChatsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrivateChatsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PrivateChatsClient<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PrivateChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatsFindFirstArgs} args - Arguments to find a PrivateChats
     * @example
     * // Get one PrivateChats
     * const privateChats = await prisma.privateChats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrivateChatsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PrivateChatsFindFirstArgs<ExtArgs>>
    ): Prisma__PrivateChatsClient<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PrivateChats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatsFindFirstOrThrowArgs} args - Arguments to find a PrivateChats
     * @example
     * // Get one PrivateChats
     * const privateChats = await prisma.privateChats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PrivateChatsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PrivateChatsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PrivateChatsClient<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PrivateChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateChats
     * const privateChats = await prisma.privateChats.findMany()
     * 
     * // Get first 10 PrivateChats
     * const privateChats = await prisma.privateChats.findMany({ take: 10 })
     * 
     * // Only select the `createdAt`
     * const privateChatsWithCreatedAtOnly = await prisma.privateChats.findMany({ select: { createdAt: true } })
     * 
    **/
    findMany<T extends PrivateChatsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrivateChatsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PrivateChats.
     * @param {PrivateChatsCreateArgs} args - Arguments to create a PrivateChats.
     * @example
     * // Create one PrivateChats
     * const PrivateChats = await prisma.privateChats.create({
     *   data: {
     *     // ... data to create a PrivateChats
     *   }
     * })
     * 
    **/
    create<T extends PrivateChatsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PrivateChatsCreateArgs<ExtArgs>>
    ): Prisma__PrivateChatsClient<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PrivateChats.
     *     @param {PrivateChatsCreateManyArgs} args - Arguments to create many PrivateChats.
     *     @example
     *     // Create many PrivateChats
     *     const privateChats = await prisma.privateChats.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PrivateChatsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrivateChatsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PrivateChats.
     * @param {PrivateChatsDeleteArgs} args - Arguments to delete one PrivateChats.
     * @example
     * // Delete one PrivateChats
     * const PrivateChats = await prisma.privateChats.delete({
     *   where: {
     *     // ... filter to delete one PrivateChats
     *   }
     * })
     * 
    **/
    delete<T extends PrivateChatsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PrivateChatsDeleteArgs<ExtArgs>>
    ): Prisma__PrivateChatsClient<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PrivateChats.
     * @param {PrivateChatsUpdateArgs} args - Arguments to update one PrivateChats.
     * @example
     * // Update one PrivateChats
     * const privateChats = await prisma.privateChats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrivateChatsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PrivateChatsUpdateArgs<ExtArgs>>
    ): Prisma__PrivateChatsClient<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PrivateChats.
     * @param {PrivateChatsDeleteManyArgs} args - Arguments to filter PrivateChats to delete.
     * @example
     * // Delete a few PrivateChats
     * const { count } = await prisma.privateChats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrivateChatsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PrivateChatsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateChats
     * const privateChats = await prisma.privateChats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrivateChatsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PrivateChatsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrivateChats.
     * @param {PrivateChatsUpsertArgs} args - Arguments to update or create a PrivateChats.
     * @example
     * // Update or create a PrivateChats
     * const privateChats = await prisma.privateChats.upsert({
     *   create: {
     *     // ... data to create a PrivateChats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateChats we want to update
     *   }
     * })
    **/
    upsert<T extends PrivateChatsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PrivateChatsUpsertArgs<ExtArgs>>
    ): Prisma__PrivateChatsClient<$Result.GetResult<Prisma.$PrivateChatsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more PrivateChats that matches the filter.
     * @param {PrivateChatsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const privateChats = await prisma.privateChats.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PrivateChatsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PrivateChats.
     * @param {PrivateChatsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const privateChats = await prisma.privateChats.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PrivateChatsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of PrivateChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatsCountArgs} args - Arguments to filter PrivateChats to count.
     * @example
     * // Count the number of PrivateChats
     * const count = await prisma.privateChats.count({
     *   where: {
     *     // ... the filter for the PrivateChats we want to count
     *   }
     * })
    **/
    count<T extends PrivateChatsCountArgs>(
      args?: Subset<T, PrivateChatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateChatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrivateChatsAggregateArgs>(args: Subset<T, PrivateChatsAggregateArgs>): Prisma.PrismaPromise<GetPrivateChatsAggregateType<T>>

    /**
     * Group by PrivateChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatsGroupByArgs} args - Group by arguments.
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
      T extends PrivateChatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateChatsGroupByArgs['orderBy'] }
        : { orderBy?: PrivateChatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrivateChatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateChatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateChats model
   */
  readonly fields: PrivateChatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateChats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateChatsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PrivateChats model
   */ 
  interface PrivateChatsFieldRefs {
    readonly createdAt: FieldRef<"PrivateChats", 'DateTime'>
    readonly id: FieldRef<"PrivateChats", 'String'>
    readonly chatId: FieldRef<"PrivateChats", 'String'>
    readonly isGroup: FieldRef<"PrivateChats", 'Boolean'>
    readonly isReadOnly: FieldRef<"PrivateChats", 'Boolean'>
    readonly name: FieldRef<"PrivateChats", 'String'>
    readonly popularCommands: FieldRef<"PrivateChats", 'Json'>
    readonly timestamp: FieldRef<"PrivateChats", 'Int'>
    readonly totalCommandsExecuted: FieldRef<"PrivateChats", 'Int'>
    readonly totalMessagesReceived: FieldRef<"PrivateChats", 'Int'>
    readonly updatedAt: FieldRef<"PrivateChats", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PrivateChats findUnique
   */
  export type PrivateChatsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChats to fetch.
     */
    where: PrivateChatsWhereUniqueInput
  }


  /**
   * PrivateChats findUniqueOrThrow
   */
  export type PrivateChatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChats to fetch.
     */
    where: PrivateChatsWhereUniqueInput
  }


  /**
   * PrivateChats findFirst
   */
  export type PrivateChatsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChats to fetch.
     */
    where?: PrivateChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatsOrderByWithRelationInput | PrivateChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateChats.
     */
    cursor?: PrivateChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateChats.
     */
    distinct?: PrivateChatsScalarFieldEnum | PrivateChatsScalarFieldEnum[]
  }


  /**
   * PrivateChats findFirstOrThrow
   */
  export type PrivateChatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChats to fetch.
     */
    where?: PrivateChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatsOrderByWithRelationInput | PrivateChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateChats.
     */
    cursor?: PrivateChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateChats.
     */
    distinct?: PrivateChatsScalarFieldEnum | PrivateChatsScalarFieldEnum[]
  }


  /**
   * PrivateChats findMany
   */
  export type PrivateChatsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChats to fetch.
     */
    where?: PrivateChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatsOrderByWithRelationInput | PrivateChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateChats.
     */
    cursor?: PrivateChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    distinct?: PrivateChatsScalarFieldEnum | PrivateChatsScalarFieldEnum[]
  }


  /**
   * PrivateChats create
   */
  export type PrivateChatsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateChats.
     */
    data: XOR<PrivateChatsCreateInput, PrivateChatsUncheckedCreateInput>
  }


  /**
   * PrivateChats createMany
   */
  export type PrivateChatsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateChats.
     */
    data: PrivateChatsCreateManyInput | PrivateChatsCreateManyInput[]
  }


  /**
   * PrivateChats update
   */
  export type PrivateChatsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateChats.
     */
    data: XOR<PrivateChatsUpdateInput, PrivateChatsUncheckedUpdateInput>
    /**
     * Choose, which PrivateChats to update.
     */
    where: PrivateChatsWhereUniqueInput
  }


  /**
   * PrivateChats updateMany
   */
  export type PrivateChatsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateChats.
     */
    data: XOR<PrivateChatsUpdateManyMutationInput, PrivateChatsUncheckedUpdateManyInput>
    /**
     * Filter which PrivateChats to update
     */
    where?: PrivateChatsWhereInput
  }


  /**
   * PrivateChats upsert
   */
  export type PrivateChatsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateChats to update in case it exists.
     */
    where: PrivateChatsWhereUniqueInput
    /**
     * In case the PrivateChats found by the `where` argument doesn't exist, create a new PrivateChats with this data.
     */
    create: XOR<PrivateChatsCreateInput, PrivateChatsUncheckedCreateInput>
    /**
     * In case the PrivateChats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateChatsUpdateInput, PrivateChatsUncheckedUpdateInput>
  }


  /**
   * PrivateChats delete
   */
  export type PrivateChatsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
    /**
     * Filter which PrivateChats to delete.
     */
    where: PrivateChatsWhereUniqueInput
  }


  /**
   * PrivateChats deleteMany
   */
  export type PrivateChatsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateChats to delete
     */
    where?: PrivateChatsWhereInput
  }


  /**
   * PrivateChats findRaw
   */
  export type PrivateChatsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PrivateChats aggregateRaw
   */
  export type PrivateChatsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PrivateChats without action
   */
  export type PrivateChatsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChats
     */
    select?: PrivateChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PrivateChatsInclude<ExtArgs> | null
  }



  /**
   * Model GroupChats
   */

  export type AggregateGroupChats = {
    _count: GroupChatsCountAggregateOutputType | null
    _avg: GroupChatsAvgAggregateOutputType | null
    _sum: GroupChatsSumAggregateOutputType | null
    _min: GroupChatsMinAggregateOutputType | null
    _max: GroupChatsMaxAggregateOutputType | null
  }

  export type GroupChatsAvgAggregateOutputType = {
    maxParticipants: number | null
    timestamp: number | null
    totalCommandsExecuted: number | null
    totalMembers: number | null
    totalMessagesReceived: number | null
  }

  export type GroupChatsSumAggregateOutputType = {
    maxParticipants: number | null
    timestamp: number | null
    totalCommandsExecuted: number | null
    totalMembers: number | null
    totalMessagesReceived: number | null
  }

  export type GroupChatsMinAggregateOutputType = {
    createdAt: Date | null
    description: string | null
    groupId: string | null
    id: string | null
    isGroup: boolean | null
    isReadOnly: boolean | null
    maxParticipants: number | null
    name: string | null
    timestamp: number | null
    totalCommandsExecuted: number | null
    totalMembers: number | null
    totalMessagesReceived: number | null
    updatedAt: Date | null
    welcomeMessage: string | null
  }

  export type GroupChatsMaxAggregateOutputType = {
    createdAt: Date | null
    description: string | null
    groupId: string | null
    id: string | null
    isGroup: boolean | null
    isReadOnly: boolean | null
    maxParticipants: number | null
    name: string | null
    timestamp: number | null
    totalCommandsExecuted: number | null
    totalMembers: number | null
    totalMessagesReceived: number | null
    updatedAt: Date | null
    welcomeMessage: string | null
  }

  export type GroupChatsCountAggregateOutputType = {
    blockedUsers: number
    commandsPerMember: number
    createdAt: number
    description: number
    groupId: number
    id: number
    isGroup: number
    isReadOnly: number
    maxParticipants: number
    messagesPerMember: number
    mutedWords: number
    name: number
    popularCommands: number
    timestamp: number
    totalCommandsExecuted: number
    totalMembers: number
    totalMessagesReceived: number
    updatedAt: number
    welcomeMessage: number
    _all: number
  }


  export type GroupChatsAvgAggregateInputType = {
    maxParticipants?: true
    timestamp?: true
    totalCommandsExecuted?: true
    totalMembers?: true
    totalMessagesReceived?: true
  }

  export type GroupChatsSumAggregateInputType = {
    maxParticipants?: true
    timestamp?: true
    totalCommandsExecuted?: true
    totalMembers?: true
    totalMessagesReceived?: true
  }

  export type GroupChatsMinAggregateInputType = {
    createdAt?: true
    description?: true
    groupId?: true
    id?: true
    isGroup?: true
    isReadOnly?: true
    maxParticipants?: true
    name?: true
    timestamp?: true
    totalCommandsExecuted?: true
    totalMembers?: true
    totalMessagesReceived?: true
    updatedAt?: true
    welcomeMessage?: true
  }

  export type GroupChatsMaxAggregateInputType = {
    createdAt?: true
    description?: true
    groupId?: true
    id?: true
    isGroup?: true
    isReadOnly?: true
    maxParticipants?: true
    name?: true
    timestamp?: true
    totalCommandsExecuted?: true
    totalMembers?: true
    totalMessagesReceived?: true
    updatedAt?: true
    welcomeMessage?: true
  }

  export type GroupChatsCountAggregateInputType = {
    blockedUsers?: true
    commandsPerMember?: true
    createdAt?: true
    description?: true
    groupId?: true
    id?: true
    isGroup?: true
    isReadOnly?: true
    maxParticipants?: true
    messagesPerMember?: true
    mutedWords?: true
    name?: true
    popularCommands?: true
    timestamp?: true
    totalCommandsExecuted?: true
    totalMembers?: true
    totalMessagesReceived?: true
    updatedAt?: true
    welcomeMessage?: true
    _all?: true
  }

  export type GroupChatsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupChats to aggregate.
     */
    where?: GroupChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatsOrderByWithRelationInput | GroupChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupChats
    **/
    _count?: true | GroupChatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupChatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupChatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupChatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupChatsMaxAggregateInputType
  }

  export type GetGroupChatsAggregateType<T extends GroupChatsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupChats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupChats[P]>
      : GetScalarType<T[P], AggregateGroupChats[P]>
  }




  export type GroupChatsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupChatsWhereInput
    orderBy?: GroupChatsOrderByWithAggregationInput | GroupChatsOrderByWithAggregationInput[]
    by: GroupChatsScalarFieldEnum[] | GroupChatsScalarFieldEnum
    having?: GroupChatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupChatsCountAggregateInputType | true
    _avg?: GroupChatsAvgAggregateInputType
    _sum?: GroupChatsSumAggregateInputType
    _min?: GroupChatsMinAggregateInputType
    _max?: GroupChatsMaxAggregateInputType
  }

  export type GroupChatsGroupByOutputType = {
    blockedUsers: string[]
    commandsPerMember: JsonValue | null
    createdAt: Date
    description: string
    groupId: string
    id: string
    isGroup: boolean
    isReadOnly: boolean
    maxParticipants: number
    messagesPerMember: JsonValue | null
    mutedWords: string[]
    name: string
    popularCommands: JsonValue | null
    timestamp: number
    totalCommandsExecuted: number
    totalMembers: number
    totalMessagesReceived: number
    updatedAt: Date
    welcomeMessage: string
    _count: GroupChatsCountAggregateOutputType | null
    _avg: GroupChatsAvgAggregateOutputType | null
    _sum: GroupChatsSumAggregateOutputType | null
    _min: GroupChatsMinAggregateOutputType | null
    _max: GroupChatsMaxAggregateOutputType | null
  }

  type GetGroupChatsGroupByPayload<T extends GroupChatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupChatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupChatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupChatsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupChatsGroupByOutputType[P]>
        }
      >
    >


  export type GroupChatsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    blockedUsers?: boolean
    commandsPerMember?: boolean
    createdAt?: boolean
    description?: boolean
    groupId?: boolean
    id?: boolean
    isGroup?: boolean
    isReadOnly?: boolean
    maxParticipants?: boolean
    messagesPerMember?: boolean
    mutedWords?: boolean
    name?: boolean
    popularCommands?: boolean
    tags?: boolean | TagsDefaultArgs<ExtArgs>
    timestamp?: boolean
    totalCommandsExecuted?: boolean
    totalMembers?: boolean
    totalMessagesReceived?: boolean
    updatedAt?: boolean
    welcomeMessage?: boolean
  }, ExtArgs["result"]["groupChats"]>

  export type GroupChatsSelectScalar = {
    blockedUsers?: boolean
    commandsPerMember?: boolean
    createdAt?: boolean
    description?: boolean
    groupId?: boolean
    id?: boolean
    isGroup?: boolean
    isReadOnly?: boolean
    maxParticipants?: boolean
    messagesPerMember?: boolean
    mutedWords?: boolean
    name?: boolean
    popularCommands?: boolean
    timestamp?: boolean
    totalCommandsExecuted?: boolean
    totalMembers?: boolean
    totalMessagesReceived?: boolean
    updatedAt?: boolean
    welcomeMessage?: boolean
  }

  export type GroupChatsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $GroupChatsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GroupChats"
    objects: {}
    scalars: $Extensions.GetResult<{
      blockedUsers: string[]
      commandsPerMember: Prisma.JsonValue | null
      createdAt: Date
      description: string
      groupId: string
      id: string
      isGroup: boolean
      isReadOnly: boolean
      maxParticipants: number
      messagesPerMember: Prisma.JsonValue | null
      mutedWords: string[]
      name: string
      popularCommands: Prisma.JsonValue | null
      timestamp: number
      totalCommandsExecuted: number
      totalMembers: number
      totalMessagesReceived: number
      updatedAt: Date
      welcomeMessage: string
    }, ExtArgs["result"]["groupChats"]>
    composites: {
      tags: Prisma.$TagsPayload
    }
  }


  type GroupChatsGetPayload<S extends boolean | null | undefined | GroupChatsDefaultArgs> = $Result.GetResult<Prisma.$GroupChatsPayload, S>

  type GroupChatsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupChatsFindManyArgs, 'select' | 'include'> & {
      select?: GroupChatsCountAggregateInputType | true
    }

  export interface GroupChatsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupChats'], meta: { name: 'GroupChats' } }
    /**
     * Find zero or one GroupChats that matches the filter.
     * @param {GroupChatsFindUniqueArgs} args - Arguments to find a GroupChats
     * @example
     * // Get one GroupChats
     * const groupChats = await prisma.groupChats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupChatsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupChatsFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupChatsClient<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GroupChats that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupChatsFindUniqueOrThrowArgs} args - Arguments to find a GroupChats
     * @example
     * // Get one GroupChats
     * const groupChats = await prisma.groupChats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupChatsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupChatsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupChatsClient<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GroupChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatsFindFirstArgs} args - Arguments to find a GroupChats
     * @example
     * // Get one GroupChats
     * const groupChats = await prisma.groupChats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupChatsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupChatsFindFirstArgs<ExtArgs>>
    ): Prisma__GroupChatsClient<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GroupChats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatsFindFirstOrThrowArgs} args - Arguments to find a GroupChats
     * @example
     * // Get one GroupChats
     * const groupChats = await prisma.groupChats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupChatsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupChatsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupChatsClient<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GroupChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupChats
     * const groupChats = await prisma.groupChats.findMany()
     * 
     * // Get first 10 GroupChats
     * const groupChats = await prisma.groupChats.findMany({ take: 10 })
     * 
     * // Only select the `blockedUsers`
     * const groupChatsWithBlockedUsersOnly = await prisma.groupChats.findMany({ select: { blockedUsers: true } })
     * 
    **/
    findMany<T extends GroupChatsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupChatsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GroupChats.
     * @param {GroupChatsCreateArgs} args - Arguments to create a GroupChats.
     * @example
     * // Create one GroupChats
     * const GroupChats = await prisma.groupChats.create({
     *   data: {
     *     // ... data to create a GroupChats
     *   }
     * })
     * 
    **/
    create<T extends GroupChatsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupChatsCreateArgs<ExtArgs>>
    ): Prisma__GroupChatsClient<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GroupChats.
     *     @param {GroupChatsCreateManyArgs} args - Arguments to create many GroupChats.
     *     @example
     *     // Create many GroupChats
     *     const groupChats = await prisma.groupChats.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupChatsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupChatsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupChats.
     * @param {GroupChatsDeleteArgs} args - Arguments to delete one GroupChats.
     * @example
     * // Delete one GroupChats
     * const GroupChats = await prisma.groupChats.delete({
     *   where: {
     *     // ... filter to delete one GroupChats
     *   }
     * })
     * 
    **/
    delete<T extends GroupChatsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupChatsDeleteArgs<ExtArgs>>
    ): Prisma__GroupChatsClient<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GroupChats.
     * @param {GroupChatsUpdateArgs} args - Arguments to update one GroupChats.
     * @example
     * // Update one GroupChats
     * const groupChats = await prisma.groupChats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupChatsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupChatsUpdateArgs<ExtArgs>>
    ): Prisma__GroupChatsClient<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GroupChats.
     * @param {GroupChatsDeleteManyArgs} args - Arguments to filter GroupChats to delete.
     * @example
     * // Delete a few GroupChats
     * const { count } = await prisma.groupChats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupChatsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupChatsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupChats
     * const groupChats = await prisma.groupChats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupChatsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupChatsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupChats.
     * @param {GroupChatsUpsertArgs} args - Arguments to update or create a GroupChats.
     * @example
     * // Update or create a GroupChats
     * const groupChats = await prisma.groupChats.upsert({
     *   create: {
     *     // ... data to create a GroupChats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupChats we want to update
     *   }
     * })
    **/
    upsert<T extends GroupChatsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupChatsUpsertArgs<ExtArgs>>
    ): Prisma__GroupChatsClient<$Result.GetResult<Prisma.$GroupChatsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more GroupChats that matches the filter.
     * @param {GroupChatsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const groupChats = await prisma.groupChats.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GroupChatsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GroupChats.
     * @param {GroupChatsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const groupChats = await prisma.groupChats.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GroupChatsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of GroupChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatsCountArgs} args - Arguments to filter GroupChats to count.
     * @example
     * // Count the number of GroupChats
     * const count = await prisma.groupChats.count({
     *   where: {
     *     // ... the filter for the GroupChats we want to count
     *   }
     * })
    **/
    count<T extends GroupChatsCountArgs>(
      args?: Subset<T, GroupChatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupChatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupChatsAggregateArgs>(args: Subset<T, GroupChatsAggregateArgs>): Prisma.PrismaPromise<GetGroupChatsAggregateType<T>>

    /**
     * Group by GroupChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupChatsGroupByArgs} args - Group by arguments.
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
      T extends GroupChatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupChatsGroupByArgs['orderBy'] }
        : { orderBy?: GroupChatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupChatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupChatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupChats model
   */
  readonly fields: GroupChatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupChats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupChatsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GroupChats model
   */ 
  interface GroupChatsFieldRefs {
    readonly blockedUsers: FieldRef<"GroupChats", 'String[]'>
    readonly commandsPerMember: FieldRef<"GroupChats", 'Json'>
    readonly createdAt: FieldRef<"GroupChats", 'DateTime'>
    readonly description: FieldRef<"GroupChats", 'String'>
    readonly groupId: FieldRef<"GroupChats", 'String'>
    readonly id: FieldRef<"GroupChats", 'String'>
    readonly isGroup: FieldRef<"GroupChats", 'Boolean'>
    readonly isReadOnly: FieldRef<"GroupChats", 'Boolean'>
    readonly maxParticipants: FieldRef<"GroupChats", 'Int'>
    readonly messagesPerMember: FieldRef<"GroupChats", 'Json'>
    readonly mutedWords: FieldRef<"GroupChats", 'String[]'>
    readonly name: FieldRef<"GroupChats", 'String'>
    readonly popularCommands: FieldRef<"GroupChats", 'Json'>
    readonly timestamp: FieldRef<"GroupChats", 'Int'>
    readonly totalCommandsExecuted: FieldRef<"GroupChats", 'Int'>
    readonly totalMembers: FieldRef<"GroupChats", 'Int'>
    readonly totalMessagesReceived: FieldRef<"GroupChats", 'Int'>
    readonly updatedAt: FieldRef<"GroupChats", 'DateTime'>
    readonly welcomeMessage: FieldRef<"GroupChats", 'String'>
  }
    

  // Custom InputTypes

  /**
   * GroupChats findUnique
   */
  export type GroupChatsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupChats to fetch.
     */
    where: GroupChatsWhereUniqueInput
  }


  /**
   * GroupChats findUniqueOrThrow
   */
  export type GroupChatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupChats to fetch.
     */
    where: GroupChatsWhereUniqueInput
  }


  /**
   * GroupChats findFirst
   */
  export type GroupChatsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupChats to fetch.
     */
    where?: GroupChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatsOrderByWithRelationInput | GroupChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupChats.
     */
    cursor?: GroupChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupChats.
     */
    distinct?: GroupChatsScalarFieldEnum | GroupChatsScalarFieldEnum[]
  }


  /**
   * GroupChats findFirstOrThrow
   */
  export type GroupChatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupChats to fetch.
     */
    where?: GroupChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatsOrderByWithRelationInput | GroupChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupChats.
     */
    cursor?: GroupChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupChats.
     */
    distinct?: GroupChatsScalarFieldEnum | GroupChatsScalarFieldEnum[]
  }


  /**
   * GroupChats findMany
   */
  export type GroupChatsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * Filter, which GroupChats to fetch.
     */
    where?: GroupChatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupChats to fetch.
     */
    orderBy?: GroupChatsOrderByWithRelationInput | GroupChatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupChats.
     */
    cursor?: GroupChatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupChats.
     */
    skip?: number
    distinct?: GroupChatsScalarFieldEnum | GroupChatsScalarFieldEnum[]
  }


  /**
   * GroupChats create
   */
  export type GroupChatsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupChats.
     */
    data: XOR<GroupChatsCreateInput, GroupChatsUncheckedCreateInput>
  }


  /**
   * GroupChats createMany
   */
  export type GroupChatsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupChats.
     */
    data: GroupChatsCreateManyInput | GroupChatsCreateManyInput[]
  }


  /**
   * GroupChats update
   */
  export type GroupChatsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupChats.
     */
    data: XOR<GroupChatsUpdateInput, GroupChatsUncheckedUpdateInput>
    /**
     * Choose, which GroupChats to update.
     */
    where: GroupChatsWhereUniqueInput
  }


  /**
   * GroupChats updateMany
   */
  export type GroupChatsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupChats.
     */
    data: XOR<GroupChatsUpdateManyMutationInput, GroupChatsUncheckedUpdateManyInput>
    /**
     * Filter which GroupChats to update
     */
    where?: GroupChatsWhereInput
  }


  /**
   * GroupChats upsert
   */
  export type GroupChatsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupChats to update in case it exists.
     */
    where: GroupChatsWhereUniqueInput
    /**
     * In case the GroupChats found by the `where` argument doesn't exist, create a new GroupChats with this data.
     */
    create: XOR<GroupChatsCreateInput, GroupChatsUncheckedCreateInput>
    /**
     * In case the GroupChats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupChatsUpdateInput, GroupChatsUncheckedUpdateInput>
  }


  /**
   * GroupChats delete
   */
  export type GroupChatsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
    /**
     * Filter which GroupChats to delete.
     */
    where: GroupChatsWhereUniqueInput
  }


  /**
   * GroupChats deleteMany
   */
  export type GroupChatsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupChats to delete
     */
    where?: GroupChatsWhereInput
  }


  /**
   * GroupChats findRaw
   */
  export type GroupChatsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * GroupChats aggregateRaw
   */
  export type GroupChatsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * GroupChats without action
   */
  export type GroupChatsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupChats
     */
    select?: GroupChatsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupChatsInclude<ExtArgs> | null
  }



  /**
   * Model GroupList
   */

  export type AggregateGroupList = {
    _count: GroupListCountAggregateOutputType | null
    _avg: GroupListAvgAggregateOutputType | null
    _sum: GroupListSumAggregateOutputType | null
    _min: GroupListMinAggregateOutputType | null
    _max: GroupListMaxAggregateOutputType | null
  }

  export type GroupListAvgAggregateOutputType = {
    timer: number | null
  }

  export type GroupListSumAggregateOutputType = {
    timer: number | null
  }

  export type GroupListMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    timer: number | null
    lastAutoMessage: Date | null
  }

  export type GroupListMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    timer: number | null
    lastAutoMessage: Date | null
  }

  export type GroupListCountAggregateOutputType = {
    id: number
    groupId: number
    timer: number
    lastAutoMessage: number
    _all: number
  }


  export type GroupListAvgAggregateInputType = {
    timer?: true
  }

  export type GroupListSumAggregateInputType = {
    timer?: true
  }

  export type GroupListMinAggregateInputType = {
    id?: true
    groupId?: true
    timer?: true
    lastAutoMessage?: true
  }

  export type GroupListMaxAggregateInputType = {
    id?: true
    groupId?: true
    timer?: true
    lastAutoMessage?: true
  }

  export type GroupListCountAggregateInputType = {
    id?: true
    groupId?: true
    timer?: true
    lastAutoMessage?: true
    _all?: true
  }

  export type GroupListAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupList to aggregate.
     */
    where?: GroupListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupLists to fetch.
     */
    orderBy?: GroupListOrderByWithRelationInput | GroupListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupLists
    **/
    _count?: true | GroupListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupListMaxAggregateInputType
  }

  export type GetGroupListAggregateType<T extends GroupListAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupList[P]>
      : GetScalarType<T[P], AggregateGroupList[P]>
  }




  export type GroupListGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupListWhereInput
    orderBy?: GroupListOrderByWithAggregationInput | GroupListOrderByWithAggregationInput[]
    by: GroupListScalarFieldEnum[] | GroupListScalarFieldEnum
    having?: GroupListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupListCountAggregateInputType | true
    _avg?: GroupListAvgAggregateInputType
    _sum?: GroupListSumAggregateInputType
    _min?: GroupListMinAggregateInputType
    _max?: GroupListMaxAggregateInputType
  }

  export type GroupListGroupByOutputType = {
    id: string
    groupId: string
    timer: number
    lastAutoMessage: Date
    _count: GroupListCountAggregateOutputType | null
    _avg: GroupListAvgAggregateOutputType | null
    _sum: GroupListSumAggregateOutputType | null
    _min: GroupListMinAggregateOutputType | null
    _max: GroupListMaxAggregateOutputType | null
  }

  type GetGroupListGroupByPayload<T extends GroupListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupListGroupByOutputType[P]>
            : GetScalarType<T[P], GroupListGroupByOutputType[P]>
        }
      >
    >


  export type GroupListSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    timer?: boolean
    lastAutoMessage?: boolean
    subscribers?: boolean | GroupListSubscriberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupList"]>

  export type GroupListSelectScalar = {
    id?: boolean
    groupId?: boolean
    timer?: boolean
    lastAutoMessage?: boolean
  }

  export type GroupListInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $GroupListPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GroupList"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      groupId: string
      timer: number
      lastAutoMessage: Date
    }, ExtArgs["result"]["groupList"]>
    composites: {
      subscribers: Prisma.$GroupListSubscriberPayload[]
    }
  }


  type GroupListGetPayload<S extends boolean | null | undefined | GroupListDefaultArgs> = $Result.GetResult<Prisma.$GroupListPayload, S>

  type GroupListCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupListFindManyArgs, 'select' | 'include'> & {
      select?: GroupListCountAggregateInputType | true
    }

  export interface GroupListDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupList'], meta: { name: 'GroupList' } }
    /**
     * Find zero or one GroupList that matches the filter.
     * @param {GroupListFindUniqueArgs} args - Arguments to find a GroupList
     * @example
     * // Get one GroupList
     * const groupList = await prisma.groupList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupListFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupListFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupListClient<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GroupList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupListFindUniqueOrThrowArgs} args - Arguments to find a GroupList
     * @example
     * // Get one GroupList
     * const groupList = await prisma.groupList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupListClient<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GroupList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupListFindFirstArgs} args - Arguments to find a GroupList
     * @example
     * // Get one GroupList
     * const groupList = await prisma.groupList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupListFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupListFindFirstArgs<ExtArgs>>
    ): Prisma__GroupListClient<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GroupList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupListFindFirstOrThrowArgs} args - Arguments to find a GroupList
     * @example
     * // Get one GroupList
     * const groupList = await prisma.groupList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupListClient<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GroupLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupLists
     * const groupLists = await prisma.groupList.findMany()
     * 
     * // Get first 10 GroupLists
     * const groupLists = await prisma.groupList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupListWithIdOnly = await prisma.groupList.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GroupList.
     * @param {GroupListCreateArgs} args - Arguments to create a GroupList.
     * @example
     * // Create one GroupList
     * const GroupList = await prisma.groupList.create({
     *   data: {
     *     // ... data to create a GroupList
     *   }
     * })
     * 
    **/
    create<T extends GroupListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupListCreateArgs<ExtArgs>>
    ): Prisma__GroupListClient<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GroupLists.
     *     @param {GroupListCreateManyArgs} args - Arguments to create many GroupLists.
     *     @example
     *     // Create many GroupLists
     *     const groupList = await prisma.groupList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupList.
     * @param {GroupListDeleteArgs} args - Arguments to delete one GroupList.
     * @example
     * // Delete one GroupList
     * const GroupList = await prisma.groupList.delete({
     *   where: {
     *     // ... filter to delete one GroupList
     *   }
     * })
     * 
    **/
    delete<T extends GroupListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupListDeleteArgs<ExtArgs>>
    ): Prisma__GroupListClient<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GroupList.
     * @param {GroupListUpdateArgs} args - Arguments to update one GroupList.
     * @example
     * // Update one GroupList
     * const groupList = await prisma.groupList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupListUpdateArgs<ExtArgs>>
    ): Prisma__GroupListClient<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GroupLists.
     * @param {GroupListDeleteManyArgs} args - Arguments to filter GroupLists to delete.
     * @example
     * // Delete a few GroupLists
     * const { count } = await prisma.groupList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupLists
     * const groupList = await prisma.groupList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupList.
     * @param {GroupListUpsertArgs} args - Arguments to update or create a GroupList.
     * @example
     * // Update or create a GroupList
     * const groupList = await prisma.groupList.upsert({
     *   create: {
     *     // ... data to create a GroupList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupList we want to update
     *   }
     * })
    **/
    upsert<T extends GroupListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupListUpsertArgs<ExtArgs>>
    ): Prisma__GroupListClient<$Result.GetResult<Prisma.$GroupListPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more GroupLists that matches the filter.
     * @param {GroupListFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const groupList = await prisma.groupList.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GroupListFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GroupList.
     * @param {GroupListAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const groupList = await prisma.groupList.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GroupListAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of GroupLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupListCountArgs} args - Arguments to filter GroupLists to count.
     * @example
     * // Count the number of GroupLists
     * const count = await prisma.groupList.count({
     *   where: {
     *     // ... the filter for the GroupLists we want to count
     *   }
     * })
    **/
    count<T extends GroupListCountArgs>(
      args?: Subset<T, GroupListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupListAggregateArgs>(args: Subset<T, GroupListAggregateArgs>): Prisma.PrismaPromise<GetGroupListAggregateType<T>>

    /**
     * Group by GroupList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupListGroupByArgs} args - Group by arguments.
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
      T extends GroupListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupListGroupByArgs['orderBy'] }
        : { orderBy?: GroupListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupList model
   */
  readonly fields: GroupListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupListClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GroupList model
   */ 
  interface GroupListFieldRefs {
    readonly id: FieldRef<"GroupList", 'String'>
    readonly groupId: FieldRef<"GroupList", 'String'>
    readonly timer: FieldRef<"GroupList", 'Int'>
    readonly lastAutoMessage: FieldRef<"GroupList", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GroupList findUnique
   */
  export type GroupListFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * Filter, which GroupList to fetch.
     */
    where: GroupListWhereUniqueInput
  }


  /**
   * GroupList findUniqueOrThrow
   */
  export type GroupListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * Filter, which GroupList to fetch.
     */
    where: GroupListWhereUniqueInput
  }


  /**
   * GroupList findFirst
   */
  export type GroupListFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * Filter, which GroupList to fetch.
     */
    where?: GroupListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupLists to fetch.
     */
    orderBy?: GroupListOrderByWithRelationInput | GroupListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupLists.
     */
    cursor?: GroupListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupLists.
     */
    distinct?: GroupListScalarFieldEnum | GroupListScalarFieldEnum[]
  }


  /**
   * GroupList findFirstOrThrow
   */
  export type GroupListFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * Filter, which GroupList to fetch.
     */
    where?: GroupListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupLists to fetch.
     */
    orderBy?: GroupListOrderByWithRelationInput | GroupListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupLists.
     */
    cursor?: GroupListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupLists.
     */
    distinct?: GroupListScalarFieldEnum | GroupListScalarFieldEnum[]
  }


  /**
   * GroupList findMany
   */
  export type GroupListFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * Filter, which GroupLists to fetch.
     */
    where?: GroupListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupLists to fetch.
     */
    orderBy?: GroupListOrderByWithRelationInput | GroupListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupLists.
     */
    cursor?: GroupListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupLists.
     */
    skip?: number
    distinct?: GroupListScalarFieldEnum | GroupListScalarFieldEnum[]
  }


  /**
   * GroupList create
   */
  export type GroupListCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupList.
     */
    data: XOR<GroupListCreateInput, GroupListUncheckedCreateInput>
  }


  /**
   * GroupList createMany
   */
  export type GroupListCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupLists.
     */
    data: GroupListCreateManyInput | GroupListCreateManyInput[]
  }


  /**
   * GroupList update
   */
  export type GroupListUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupList.
     */
    data: XOR<GroupListUpdateInput, GroupListUncheckedUpdateInput>
    /**
     * Choose, which GroupList to update.
     */
    where: GroupListWhereUniqueInput
  }


  /**
   * GroupList updateMany
   */
  export type GroupListUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupLists.
     */
    data: XOR<GroupListUpdateManyMutationInput, GroupListUncheckedUpdateManyInput>
    /**
     * Filter which GroupLists to update
     */
    where?: GroupListWhereInput
  }


  /**
   * GroupList upsert
   */
  export type GroupListUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupList to update in case it exists.
     */
    where: GroupListWhereUniqueInput
    /**
     * In case the GroupList found by the `where` argument doesn't exist, create a new GroupList with this data.
     */
    create: XOR<GroupListCreateInput, GroupListUncheckedCreateInput>
    /**
     * In case the GroupList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupListUpdateInput, GroupListUncheckedUpdateInput>
  }


  /**
   * GroupList delete
   */
  export type GroupListDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
    /**
     * Filter which GroupList to delete.
     */
    where: GroupListWhereUniqueInput
  }


  /**
   * GroupList deleteMany
   */
  export type GroupListDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupLists to delete
     */
    where?: GroupListWhereInput
  }


  /**
   * GroupList findRaw
   */
  export type GroupListFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * GroupList aggregateRaw
   */
  export type GroupListAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * GroupList without action
   */
  export type GroupListDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupList
     */
    select?: GroupListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupListInclude<ExtArgs> | null
  }



  /**
   * Model VoteBanPoll
   */

  export type AggregateVoteBanPoll = {
    _count: VoteBanPollCountAggregateOutputType | null
    _avg: VoteBanPollAvgAggregateOutputType | null
    _sum: VoteBanPollSumAggregateOutputType | null
    _min: VoteBanPollMinAggregateOutputType | null
    _max: VoteBanPollMaxAggregateOutputType | null
  }

  export type VoteBanPollAvgAggregateOutputType = {
    maxVotes: number | null
    maxTime: number | null
  }

  export type VoteBanPollSumAggregateOutputType = {
    maxVotes: number | null
    maxTime: number | null
  }

  export type VoteBanPollMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    defendant: string | null
    description: string | null
    maxVotes: number | null
    maxTime: number | null
    createdAt: Date | null
  }

  export type VoteBanPollMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    defendant: string | null
    description: string | null
    maxVotes: number | null
    maxTime: number | null
    createdAt: Date | null
  }

  export type VoteBanPollCountAggregateOutputType = {
    id: number
    groupId: number
    defendant: number
    description: number
    maxVotes: number
    maxTime: number
    createdAt: number
    _all: number
  }


  export type VoteBanPollAvgAggregateInputType = {
    maxVotes?: true
    maxTime?: true
  }

  export type VoteBanPollSumAggregateInputType = {
    maxVotes?: true
    maxTime?: true
  }

  export type VoteBanPollMinAggregateInputType = {
    id?: true
    groupId?: true
    defendant?: true
    description?: true
    maxVotes?: true
    maxTime?: true
    createdAt?: true
  }

  export type VoteBanPollMaxAggregateInputType = {
    id?: true
    groupId?: true
    defendant?: true
    description?: true
    maxVotes?: true
    maxTime?: true
    createdAt?: true
  }

  export type VoteBanPollCountAggregateInputType = {
    id?: true
    groupId?: true
    defendant?: true
    description?: true
    maxVotes?: true
    maxTime?: true
    createdAt?: true
    _all?: true
  }

  export type VoteBanPollAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoteBanPoll to aggregate.
     */
    where?: VoteBanPollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteBanPolls to fetch.
     */
    orderBy?: VoteBanPollOrderByWithRelationInput | VoteBanPollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteBanPollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteBanPolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteBanPolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoteBanPolls
    **/
    _count?: true | VoteBanPollCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoteBanPollAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoteBanPollSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteBanPollMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteBanPollMaxAggregateInputType
  }

  export type GetVoteBanPollAggregateType<T extends VoteBanPollAggregateArgs> = {
        [P in keyof T & keyof AggregateVoteBanPoll]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoteBanPoll[P]>
      : GetScalarType<T[P], AggregateVoteBanPoll[P]>
  }




  export type VoteBanPollGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VoteBanPollWhereInput
    orderBy?: VoteBanPollOrderByWithAggregationInput | VoteBanPollOrderByWithAggregationInput[]
    by: VoteBanPollScalarFieldEnum[] | VoteBanPollScalarFieldEnum
    having?: VoteBanPollScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteBanPollCountAggregateInputType | true
    _avg?: VoteBanPollAvgAggregateInputType
    _sum?: VoteBanPollSumAggregateInputType
    _min?: VoteBanPollMinAggregateInputType
    _max?: VoteBanPollMaxAggregateInputType
  }

  export type VoteBanPollGroupByOutputType = {
    id: string
    groupId: string
    defendant: string | null
    description: string | null
    maxVotes: number | null
    maxTime: number | null
    createdAt: Date
    _count: VoteBanPollCountAggregateOutputType | null
    _avg: VoteBanPollAvgAggregateOutputType | null
    _sum: VoteBanPollSumAggregateOutputType | null
    _min: VoteBanPollMinAggregateOutputType | null
    _max: VoteBanPollMaxAggregateOutputType | null
  }

  type GetVoteBanPollGroupByPayload<T extends VoteBanPollGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteBanPollGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteBanPollGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteBanPollGroupByOutputType[P]>
            : GetScalarType<T[P], VoteBanPollGroupByOutputType[P]>
        }
      >
    >


  export type VoteBanPollSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    defendant?: boolean
    description?: boolean
    maxVotes?: boolean
    maxTime?: boolean
    pool?: boolean | VoteBanVotesDefaultArgs<ExtArgs>
    createdAt?: boolean
  }, ExtArgs["result"]["voteBanPoll"]>

  export type VoteBanPollSelectScalar = {
    id?: boolean
    groupId?: boolean
    defendant?: boolean
    description?: boolean
    maxVotes?: boolean
    maxTime?: boolean
    createdAt?: boolean
  }

  export type VoteBanPollInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $VoteBanPollPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "VoteBanPoll"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      groupId: string
      defendant: string | null
      description: string | null
      maxVotes: number | null
      maxTime: number | null
      createdAt: Date
    }, ExtArgs["result"]["voteBanPoll"]>
    composites: {
      pool: Prisma.$VoteBanVotesPayload[]
    }
  }


  type VoteBanPollGetPayload<S extends boolean | null | undefined | VoteBanPollDefaultArgs> = $Result.GetResult<Prisma.$VoteBanPollPayload, S>

  type VoteBanPollCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<VoteBanPollFindManyArgs, 'select' | 'include'> & {
      select?: VoteBanPollCountAggregateInputType | true
    }

  export interface VoteBanPollDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoteBanPoll'], meta: { name: 'VoteBanPoll' } }
    /**
     * Find zero or one VoteBanPoll that matches the filter.
     * @param {VoteBanPollFindUniqueArgs} args - Arguments to find a VoteBanPoll
     * @example
     * // Get one VoteBanPoll
     * const voteBanPoll = await prisma.voteBanPoll.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VoteBanPollFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VoteBanPollFindUniqueArgs<ExtArgs>>
    ): Prisma__VoteBanPollClient<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VoteBanPoll that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VoteBanPollFindUniqueOrThrowArgs} args - Arguments to find a VoteBanPoll
     * @example
     * // Get one VoteBanPoll
     * const voteBanPoll = await prisma.voteBanPoll.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VoteBanPollFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteBanPollFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VoteBanPollClient<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VoteBanPoll that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteBanPollFindFirstArgs} args - Arguments to find a VoteBanPoll
     * @example
     * // Get one VoteBanPoll
     * const voteBanPoll = await prisma.voteBanPoll.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VoteBanPollFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteBanPollFindFirstArgs<ExtArgs>>
    ): Prisma__VoteBanPollClient<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VoteBanPoll that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteBanPollFindFirstOrThrowArgs} args - Arguments to find a VoteBanPoll
     * @example
     * // Get one VoteBanPoll
     * const voteBanPoll = await prisma.voteBanPoll.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VoteBanPollFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteBanPollFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VoteBanPollClient<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VoteBanPolls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteBanPollFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoteBanPolls
     * const voteBanPolls = await prisma.voteBanPoll.findMany()
     * 
     * // Get first 10 VoteBanPolls
     * const voteBanPolls = await prisma.voteBanPoll.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteBanPollWithIdOnly = await prisma.voteBanPoll.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VoteBanPollFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteBanPollFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VoteBanPoll.
     * @param {VoteBanPollCreateArgs} args - Arguments to create a VoteBanPoll.
     * @example
     * // Create one VoteBanPoll
     * const VoteBanPoll = await prisma.voteBanPoll.create({
     *   data: {
     *     // ... data to create a VoteBanPoll
     *   }
     * })
     * 
    **/
    create<T extends VoteBanPollCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VoteBanPollCreateArgs<ExtArgs>>
    ): Prisma__VoteBanPollClient<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VoteBanPolls.
     *     @param {VoteBanPollCreateManyArgs} args - Arguments to create many VoteBanPolls.
     *     @example
     *     // Create many VoteBanPolls
     *     const voteBanPoll = await prisma.voteBanPoll.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VoteBanPollCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteBanPollCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VoteBanPoll.
     * @param {VoteBanPollDeleteArgs} args - Arguments to delete one VoteBanPoll.
     * @example
     * // Delete one VoteBanPoll
     * const VoteBanPoll = await prisma.voteBanPoll.delete({
     *   where: {
     *     // ... filter to delete one VoteBanPoll
     *   }
     * })
     * 
    **/
    delete<T extends VoteBanPollDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VoteBanPollDeleteArgs<ExtArgs>>
    ): Prisma__VoteBanPollClient<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VoteBanPoll.
     * @param {VoteBanPollUpdateArgs} args - Arguments to update one VoteBanPoll.
     * @example
     * // Update one VoteBanPoll
     * const voteBanPoll = await prisma.voteBanPoll.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VoteBanPollUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VoteBanPollUpdateArgs<ExtArgs>>
    ): Prisma__VoteBanPollClient<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VoteBanPolls.
     * @param {VoteBanPollDeleteManyArgs} args - Arguments to filter VoteBanPolls to delete.
     * @example
     * // Delete a few VoteBanPolls
     * const { count } = await prisma.voteBanPoll.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VoteBanPollDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VoteBanPollDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoteBanPolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteBanPollUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoteBanPolls
     * const voteBanPoll = await prisma.voteBanPoll.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VoteBanPollUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VoteBanPollUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VoteBanPoll.
     * @param {VoteBanPollUpsertArgs} args - Arguments to update or create a VoteBanPoll.
     * @example
     * // Update or create a VoteBanPoll
     * const voteBanPoll = await prisma.voteBanPoll.upsert({
     *   create: {
     *     // ... data to create a VoteBanPoll
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoteBanPoll we want to update
     *   }
     * })
    **/
    upsert<T extends VoteBanPollUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VoteBanPollUpsertArgs<ExtArgs>>
    ): Prisma__VoteBanPollClient<$Result.GetResult<Prisma.$VoteBanPollPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more VoteBanPolls that matches the filter.
     * @param {VoteBanPollFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const voteBanPoll = await prisma.voteBanPoll.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: VoteBanPollFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a VoteBanPoll.
     * @param {VoteBanPollAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const voteBanPoll = await prisma.voteBanPoll.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: VoteBanPollAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of VoteBanPolls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteBanPollCountArgs} args - Arguments to filter VoteBanPolls to count.
     * @example
     * // Count the number of VoteBanPolls
     * const count = await prisma.voteBanPoll.count({
     *   where: {
     *     // ... the filter for the VoteBanPolls we want to count
     *   }
     * })
    **/
    count<T extends VoteBanPollCountArgs>(
      args?: Subset<T, VoteBanPollCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteBanPollCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoteBanPoll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteBanPollAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoteBanPollAggregateArgs>(args: Subset<T, VoteBanPollAggregateArgs>): Prisma.PrismaPromise<GetVoteBanPollAggregateType<T>>

    /**
     * Group by VoteBanPoll.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteBanPollGroupByArgs} args - Group by arguments.
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
      T extends VoteBanPollGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteBanPollGroupByArgs['orderBy'] }
        : { orderBy?: VoteBanPollGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoteBanPollGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteBanPollGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoteBanPoll model
   */
  readonly fields: VoteBanPollFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoteBanPoll.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteBanPollClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VoteBanPoll model
   */ 
  interface VoteBanPollFieldRefs {
    readonly id: FieldRef<"VoteBanPoll", 'String'>
    readonly groupId: FieldRef<"VoteBanPoll", 'String'>
    readonly defendant: FieldRef<"VoteBanPoll", 'String'>
    readonly description: FieldRef<"VoteBanPoll", 'String'>
    readonly maxVotes: FieldRef<"VoteBanPoll", 'Int'>
    readonly maxTime: FieldRef<"VoteBanPoll", 'Int'>
    readonly createdAt: FieldRef<"VoteBanPoll", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VoteBanPoll findUnique
   */
  export type VoteBanPollFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * Filter, which VoteBanPoll to fetch.
     */
    where: VoteBanPollWhereUniqueInput
  }


  /**
   * VoteBanPoll findUniqueOrThrow
   */
  export type VoteBanPollFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * Filter, which VoteBanPoll to fetch.
     */
    where: VoteBanPollWhereUniqueInput
  }


  /**
   * VoteBanPoll findFirst
   */
  export type VoteBanPollFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * Filter, which VoteBanPoll to fetch.
     */
    where?: VoteBanPollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteBanPolls to fetch.
     */
    orderBy?: VoteBanPollOrderByWithRelationInput | VoteBanPollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoteBanPolls.
     */
    cursor?: VoteBanPollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteBanPolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteBanPolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoteBanPolls.
     */
    distinct?: VoteBanPollScalarFieldEnum | VoteBanPollScalarFieldEnum[]
  }


  /**
   * VoteBanPoll findFirstOrThrow
   */
  export type VoteBanPollFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * Filter, which VoteBanPoll to fetch.
     */
    where?: VoteBanPollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteBanPolls to fetch.
     */
    orderBy?: VoteBanPollOrderByWithRelationInput | VoteBanPollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoteBanPolls.
     */
    cursor?: VoteBanPollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteBanPolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteBanPolls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoteBanPolls.
     */
    distinct?: VoteBanPollScalarFieldEnum | VoteBanPollScalarFieldEnum[]
  }


  /**
   * VoteBanPoll findMany
   */
  export type VoteBanPollFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * Filter, which VoteBanPolls to fetch.
     */
    where?: VoteBanPollWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoteBanPolls to fetch.
     */
    orderBy?: VoteBanPollOrderByWithRelationInput | VoteBanPollOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoteBanPolls.
     */
    cursor?: VoteBanPollWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoteBanPolls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoteBanPolls.
     */
    skip?: number
    distinct?: VoteBanPollScalarFieldEnum | VoteBanPollScalarFieldEnum[]
  }


  /**
   * VoteBanPoll create
   */
  export type VoteBanPollCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * The data needed to create a VoteBanPoll.
     */
    data: XOR<VoteBanPollCreateInput, VoteBanPollUncheckedCreateInput>
  }


  /**
   * VoteBanPoll createMany
   */
  export type VoteBanPollCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoteBanPolls.
     */
    data: VoteBanPollCreateManyInput | VoteBanPollCreateManyInput[]
  }


  /**
   * VoteBanPoll update
   */
  export type VoteBanPollUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * The data needed to update a VoteBanPoll.
     */
    data: XOR<VoteBanPollUpdateInput, VoteBanPollUncheckedUpdateInput>
    /**
     * Choose, which VoteBanPoll to update.
     */
    where: VoteBanPollWhereUniqueInput
  }


  /**
   * VoteBanPoll updateMany
   */
  export type VoteBanPollUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoteBanPolls.
     */
    data: XOR<VoteBanPollUpdateManyMutationInput, VoteBanPollUncheckedUpdateManyInput>
    /**
     * Filter which VoteBanPolls to update
     */
    where?: VoteBanPollWhereInput
  }


  /**
   * VoteBanPoll upsert
   */
  export type VoteBanPollUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * The filter to search for the VoteBanPoll to update in case it exists.
     */
    where: VoteBanPollWhereUniqueInput
    /**
     * In case the VoteBanPoll found by the `where` argument doesn't exist, create a new VoteBanPoll with this data.
     */
    create: XOR<VoteBanPollCreateInput, VoteBanPollUncheckedCreateInput>
    /**
     * In case the VoteBanPoll was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteBanPollUpdateInput, VoteBanPollUncheckedUpdateInput>
  }


  /**
   * VoteBanPoll delete
   */
  export type VoteBanPollDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
    /**
     * Filter which VoteBanPoll to delete.
     */
    where: VoteBanPollWhereUniqueInput
  }


  /**
   * VoteBanPoll deleteMany
   */
  export type VoteBanPollDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoteBanPolls to delete
     */
    where?: VoteBanPollWhereInput
  }


  /**
   * VoteBanPoll findRaw
   */
  export type VoteBanPollFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * VoteBanPoll aggregateRaw
   */
  export type VoteBanPollAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * VoteBanPoll without action
   */
  export type VoteBanPollDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoteBanPoll
     */
    select?: VoteBanPollSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VoteBanPollInclude<ExtArgs> | null
  }



  /**
   * Model ContactForms
   */

  export type AggregateContactForms = {
    _count: ContactFormsCountAggregateOutputType | null
    _min: ContactFormsMinAggregateOutputType | null
    _max: ContactFormsMaxAggregateOutputType | null
  }

  export type ContactFormsMinAggregateOutputType = {
    id: string | null
    owner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactFormsMaxAggregateOutputType = {
    id: string | null
    owner: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactFormsCountAggregateOutputType = {
    id: number
    owner: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactFormsMinAggregateInputType = {
    id?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactFormsMaxAggregateInputType = {
    id?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactFormsCountAggregateInputType = {
    id?: true
    owner?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactFormsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactForms to aggregate.
     */
    where?: ContactFormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactForms to fetch.
     */
    orderBy?: ContactFormsOrderByWithRelationInput | ContactFormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactFormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactForms
    **/
    _count?: true | ContactFormsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactFormsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactFormsMaxAggregateInputType
  }

  export type GetContactFormsAggregateType<T extends ContactFormsAggregateArgs> = {
        [P in keyof T & keyof AggregateContactForms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactForms[P]>
      : GetScalarType<T[P], AggregateContactForms[P]>
  }




  export type ContactFormsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ContactFormsWhereInput
    orderBy?: ContactFormsOrderByWithAggregationInput | ContactFormsOrderByWithAggregationInput[]
    by: ContactFormsScalarFieldEnum[] | ContactFormsScalarFieldEnum
    having?: ContactFormsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactFormsCountAggregateInputType | true
    _min?: ContactFormsMinAggregateInputType
    _max?: ContactFormsMaxAggregateInputType
  }

  export type ContactFormsGroupByOutputType = {
    id: string
    owner: string
    createdAt: Date
    updatedAt: Date
    _count: ContactFormsCountAggregateOutputType | null
    _min: ContactFormsMinAggregateOutputType | null
    _max: ContactFormsMaxAggregateOutputType | null
  }

  type GetContactFormsGroupByPayload<T extends ContactFormsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactFormsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactFormsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactFormsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactFormsGroupByOutputType[P]>
        }
      >
    >


  export type ContactFormsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    sendTo?: boolean | SendToDefaultArgs<ExtArgs>
    contacts?: boolean | ContactFormsToSentDefaultArgs<ExtArgs>
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contactForms"]>

  export type ContactFormsSelectScalar = {
    id?: boolean
    owner?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactFormsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $ContactFormsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ContactForms"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      owner: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contactForms"]>
    composites: {
      sendTo: Prisma.$SendToPayload
      contacts: Prisma.$ContactFormsToSentPayload[]
    }
  }


  type ContactFormsGetPayload<S extends boolean | null | undefined | ContactFormsDefaultArgs> = $Result.GetResult<Prisma.$ContactFormsPayload, S>

  type ContactFormsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ContactFormsFindManyArgs, 'select' | 'include'> & {
      select?: ContactFormsCountAggregateInputType | true
    }

  export interface ContactFormsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactForms'], meta: { name: 'ContactForms' } }
    /**
     * Find zero or one ContactForms that matches the filter.
     * @param {ContactFormsFindUniqueArgs} args - Arguments to find a ContactForms
     * @example
     * // Get one ContactForms
     * const contactForms = await prisma.contactForms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFormsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFormsFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactFormsClient<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContactForms that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactFormsFindUniqueOrThrowArgs} args - Arguments to find a ContactForms
     * @example
     * // Get one ContactForms
     * const contactForms = await prisma.contactForms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactFormsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFormsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactFormsClient<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContactForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormsFindFirstArgs} args - Arguments to find a ContactForms
     * @example
     * // Get one ContactForms
     * const contactForms = await prisma.contactForms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFormsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFormsFindFirstArgs<ExtArgs>>
    ): Prisma__ContactFormsClient<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContactForms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormsFindFirstOrThrowArgs} args - Arguments to find a ContactForms
     * @example
     * // Get one ContactForms
     * const contactForms = await prisma.contactForms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactFormsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFormsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactFormsClient<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContactForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactForms
     * const contactForms = await prisma.contactForms.findMany()
     * 
     * // Get first 10 ContactForms
     * const contactForms = await prisma.contactForms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactFormsWithIdOnly = await prisma.contactForms.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactFormsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFormsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContactForms.
     * @param {ContactFormsCreateArgs} args - Arguments to create a ContactForms.
     * @example
     * // Create one ContactForms
     * const ContactForms = await prisma.contactForms.create({
     *   data: {
     *     // ... data to create a ContactForms
     *   }
     * })
     * 
    **/
    create<T extends ContactFormsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFormsCreateArgs<ExtArgs>>
    ): Prisma__ContactFormsClient<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContactForms.
     *     @param {ContactFormsCreateManyArgs} args - Arguments to create many ContactForms.
     *     @example
     *     // Create many ContactForms
     *     const contactForms = await prisma.contactForms.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactFormsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFormsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContactForms.
     * @param {ContactFormsDeleteArgs} args - Arguments to delete one ContactForms.
     * @example
     * // Delete one ContactForms
     * const ContactForms = await prisma.contactForms.delete({
     *   where: {
     *     // ... filter to delete one ContactForms
     *   }
     * })
     * 
    **/
    delete<T extends ContactFormsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFormsDeleteArgs<ExtArgs>>
    ): Prisma__ContactFormsClient<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContactForms.
     * @param {ContactFormsUpdateArgs} args - Arguments to update one ContactForms.
     * @example
     * // Update one ContactForms
     * const contactForms = await prisma.contactForms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactFormsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFormsUpdateArgs<ExtArgs>>
    ): Prisma__ContactFormsClient<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContactForms.
     * @param {ContactFormsDeleteManyArgs} args - Arguments to filter ContactForms to delete.
     * @example
     * // Delete a few ContactForms
     * const { count } = await prisma.contactForms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactFormsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFormsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactForms
     * const contactForms = await prisma.contactForms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactFormsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFormsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContactForms.
     * @param {ContactFormsUpsertArgs} args - Arguments to update or create a ContactForms.
     * @example
     * // Update or create a ContactForms
     * const contactForms = await prisma.contactForms.upsert({
     *   create: {
     *     // ... data to create a ContactForms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactForms we want to update
     *   }
     * })
    **/
    upsert<T extends ContactFormsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFormsUpsertArgs<ExtArgs>>
    ): Prisma__ContactFormsClient<$Result.GetResult<Prisma.$ContactFormsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ContactForms that matches the filter.
     * @param {ContactFormsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const contactForms = await prisma.contactForms.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ContactFormsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ContactForms.
     * @param {ContactFormsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const contactForms = await prisma.contactForms.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ContactFormsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ContactForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormsCountArgs} args - Arguments to filter ContactForms to count.
     * @example
     * // Count the number of ContactForms
     * const count = await prisma.contactForms.count({
     *   where: {
     *     // ... the filter for the ContactForms we want to count
     *   }
     * })
    **/
    count<T extends ContactFormsCountArgs>(
      args?: Subset<T, ContactFormsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactFormsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactFormsAggregateArgs>(args: Subset<T, ContactFormsAggregateArgs>): Prisma.PrismaPromise<GetContactFormsAggregateType<T>>

    /**
     * Group by ContactForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFormsGroupByArgs} args - Group by arguments.
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
      T extends ContactFormsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactFormsGroupByArgs['orderBy'] }
        : { orderBy?: ContactFormsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactFormsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactFormsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactForms model
   */
  readonly fields: ContactFormsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactForms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactFormsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ContactForms model
   */ 
  interface ContactFormsFieldRefs {
    readonly id: FieldRef<"ContactForms", 'String'>
    readonly owner: FieldRef<"ContactForms", 'String'>
    readonly createdAt: FieldRef<"ContactForms", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactForms", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ContactForms findUnique
   */
  export type ContactFormsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * Filter, which ContactForms to fetch.
     */
    where: ContactFormsWhereUniqueInput
  }


  /**
   * ContactForms findUniqueOrThrow
   */
  export type ContactFormsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * Filter, which ContactForms to fetch.
     */
    where: ContactFormsWhereUniqueInput
  }


  /**
   * ContactForms findFirst
   */
  export type ContactFormsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * Filter, which ContactForms to fetch.
     */
    where?: ContactFormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactForms to fetch.
     */
    orderBy?: ContactFormsOrderByWithRelationInput | ContactFormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactForms.
     */
    cursor?: ContactFormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactForms.
     */
    distinct?: ContactFormsScalarFieldEnum | ContactFormsScalarFieldEnum[]
  }


  /**
   * ContactForms findFirstOrThrow
   */
  export type ContactFormsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * Filter, which ContactForms to fetch.
     */
    where?: ContactFormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactForms to fetch.
     */
    orderBy?: ContactFormsOrderByWithRelationInput | ContactFormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactForms.
     */
    cursor?: ContactFormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactForms.
     */
    distinct?: ContactFormsScalarFieldEnum | ContactFormsScalarFieldEnum[]
  }


  /**
   * ContactForms findMany
   */
  export type ContactFormsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * Filter, which ContactForms to fetch.
     */
    where?: ContactFormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactForms to fetch.
     */
    orderBy?: ContactFormsOrderByWithRelationInput | ContactFormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactForms.
     */
    cursor?: ContactFormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactForms.
     */
    skip?: number
    distinct?: ContactFormsScalarFieldEnum | ContactFormsScalarFieldEnum[]
  }


  /**
   * ContactForms create
   */
  export type ContactFormsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactForms.
     */
    data: XOR<ContactFormsCreateInput, ContactFormsUncheckedCreateInput>
  }


  /**
   * ContactForms createMany
   */
  export type ContactFormsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactForms.
     */
    data: ContactFormsCreateManyInput | ContactFormsCreateManyInput[]
  }


  /**
   * ContactForms update
   */
  export type ContactFormsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactForms.
     */
    data: XOR<ContactFormsUpdateInput, ContactFormsUncheckedUpdateInput>
    /**
     * Choose, which ContactForms to update.
     */
    where: ContactFormsWhereUniqueInput
  }


  /**
   * ContactForms updateMany
   */
  export type ContactFormsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactForms.
     */
    data: XOR<ContactFormsUpdateManyMutationInput, ContactFormsUncheckedUpdateManyInput>
    /**
     * Filter which ContactForms to update
     */
    where?: ContactFormsWhereInput
  }


  /**
   * ContactForms upsert
   */
  export type ContactFormsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactForms to update in case it exists.
     */
    where: ContactFormsWhereUniqueInput
    /**
     * In case the ContactForms found by the `where` argument doesn't exist, create a new ContactForms with this data.
     */
    create: XOR<ContactFormsCreateInput, ContactFormsUncheckedCreateInput>
    /**
     * In case the ContactForms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactFormsUpdateInput, ContactFormsUncheckedUpdateInput>
  }


  /**
   * ContactForms delete
   */
  export type ContactFormsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
    /**
     * Filter which ContactForms to delete.
     */
    where: ContactFormsWhereUniqueInput
  }


  /**
   * ContactForms deleteMany
   */
  export type ContactFormsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactForms to delete
     */
    where?: ContactFormsWhereInput
  }


  /**
   * ContactForms findRaw
   */
  export type ContactFormsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ContactForms aggregateRaw
   */
  export type ContactFormsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ContactForms without action
   */
  export type ContactFormsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactForms
     */
    select?: ContactFormsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactFormsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const JailsinhoScalarFieldEnum: {
    createdAt: 'createdAt',
    dateTimeUptime: 'dateTimeUptime',
    id: 'id',
    maintenanceMode: 'maintenanceMode',
    maxServerUptime: 'maxServerUptime',
    popularCommands: 'popularCommands',
    totalChats: 'totalChats',
    totalCommandsExecuted: 'totalCommandsExecuted',
    totalMessagesReceived: 'totalMessagesReceived',
    updatedAt: 'updatedAt'
  };

  export type JailsinhoScalarFieldEnum = (typeof JailsinhoScalarFieldEnum)[keyof typeof JailsinhoScalarFieldEnum]


  export const PrivateChatsScalarFieldEnum: {
    createdAt: 'createdAt',
    id: 'id',
    chatId: 'chatId',
    isGroup: 'isGroup',
    isReadOnly: 'isReadOnly',
    name: 'name',
    popularCommands: 'popularCommands',
    timestamp: 'timestamp',
    totalCommandsExecuted: 'totalCommandsExecuted',
    totalMessagesReceived: 'totalMessagesReceived',
    updatedAt: 'updatedAt'
  };

  export type PrivateChatsScalarFieldEnum = (typeof PrivateChatsScalarFieldEnum)[keyof typeof PrivateChatsScalarFieldEnum]


  export const GroupChatsScalarFieldEnum: {
    blockedUsers: 'blockedUsers',
    commandsPerMember: 'commandsPerMember',
    createdAt: 'createdAt',
    description: 'description',
    groupId: 'groupId',
    id: 'id',
    isGroup: 'isGroup',
    isReadOnly: 'isReadOnly',
    maxParticipants: 'maxParticipants',
    messagesPerMember: 'messagesPerMember',
    mutedWords: 'mutedWords',
    name: 'name',
    popularCommands: 'popularCommands',
    timestamp: 'timestamp',
    totalCommandsExecuted: 'totalCommandsExecuted',
    totalMembers: 'totalMembers',
    totalMessagesReceived: 'totalMessagesReceived',
    updatedAt: 'updatedAt',
    welcomeMessage: 'welcomeMessage'
  };

  export type GroupChatsScalarFieldEnum = (typeof GroupChatsScalarFieldEnum)[keyof typeof GroupChatsScalarFieldEnum]


  export const GroupListScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    timer: 'timer',
    lastAutoMessage: 'lastAutoMessage'
  };

  export type GroupListScalarFieldEnum = (typeof GroupListScalarFieldEnum)[keyof typeof GroupListScalarFieldEnum]


  export const VoteBanPollScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    defendant: 'defendant',
    description: 'description',
    maxVotes: 'maxVotes',
    maxTime: 'maxTime',
    createdAt: 'createdAt'
  };

  export type VoteBanPollScalarFieldEnum = (typeof VoteBanPollScalarFieldEnum)[keyof typeof VoteBanPollScalarFieldEnum]


  export const ContactFormsScalarFieldEnum: {
    id: 'id',
    owner: 'owner',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactFormsScalarFieldEnum = (typeof ContactFormsScalarFieldEnum)[keyof typeof ContactFormsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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


  export type JailsinhoWhereInput = {
    AND?: JailsinhoWhereInput | JailsinhoWhereInput[]
    OR?: JailsinhoWhereInput[]
    NOT?: JailsinhoWhereInput | JailsinhoWhereInput[]
    createdAt?: DateTimeFilter<"Jailsinho"> | Date | string
    counters?: XOR<CountersCompositeFilter, CountersObjectEqualityInput>
    dateTimeUptime?: DateTimeFilter<"Jailsinho"> | Date | string
    id?: IntFilter<"Jailsinho"> | number
    maintenanceMode?: BoolFilter<"Jailsinho"> | boolean
    maxServerUptime?: StringNullableFilter<"Jailsinho"> | string | null
    popularCommands?: JsonNullableFilter<"Jailsinho">
    totalChats?: IntFilter<"Jailsinho"> | number
    totalCommandsExecuted?: IntFilter<"Jailsinho"> | number
    totalMessagesReceived?: IntFilter<"Jailsinho"> | number
    updatedAt?: DateTimeFilter<"Jailsinho"> | Date | string
  }

  export type JailsinhoOrderByWithRelationInput = {
    createdAt?: SortOrder
    counters?: CountersOrderByInput
    dateTimeUptime?: SortOrder
    id?: SortOrder
    maintenanceMode?: SortOrder
    maxServerUptime?: SortOrder
    popularCommands?: SortOrder
    totalChats?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
  }

  export type JailsinhoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JailsinhoWhereInput | JailsinhoWhereInput[]
    OR?: JailsinhoWhereInput[]
    NOT?: JailsinhoWhereInput | JailsinhoWhereInput[]
    createdAt?: DateTimeFilter<"Jailsinho"> | Date | string
    counters?: XOR<CountersCompositeFilter, CountersObjectEqualityInput>
    dateTimeUptime?: DateTimeFilter<"Jailsinho"> | Date | string
    maintenanceMode?: BoolFilter<"Jailsinho"> | boolean
    maxServerUptime?: StringNullableFilter<"Jailsinho"> | string | null
    popularCommands?: JsonNullableFilter<"Jailsinho">
    totalChats?: IntFilter<"Jailsinho"> | number
    totalCommandsExecuted?: IntFilter<"Jailsinho"> | number
    totalMessagesReceived?: IntFilter<"Jailsinho"> | number
    updatedAt?: DateTimeFilter<"Jailsinho"> | Date | string
  }, "id">

  export type JailsinhoOrderByWithAggregationInput = {
    createdAt?: SortOrder
    dateTimeUptime?: SortOrder
    id?: SortOrder
    maintenanceMode?: SortOrder
    maxServerUptime?: SortOrder
    popularCommands?: SortOrder
    totalChats?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
    _count?: JailsinhoCountOrderByAggregateInput
    _avg?: JailsinhoAvgOrderByAggregateInput
    _max?: JailsinhoMaxOrderByAggregateInput
    _min?: JailsinhoMinOrderByAggregateInput
    _sum?: JailsinhoSumOrderByAggregateInput
  }

  export type JailsinhoScalarWhereWithAggregatesInput = {
    AND?: JailsinhoScalarWhereWithAggregatesInput | JailsinhoScalarWhereWithAggregatesInput[]
    OR?: JailsinhoScalarWhereWithAggregatesInput[]
    NOT?: JailsinhoScalarWhereWithAggregatesInput | JailsinhoScalarWhereWithAggregatesInput[]
    createdAt?: DateTimeWithAggregatesFilter<"Jailsinho"> | Date | string
    dateTimeUptime?: DateTimeWithAggregatesFilter<"Jailsinho"> | Date | string
    id?: IntWithAggregatesFilter<"Jailsinho"> | number
    maintenanceMode?: BoolWithAggregatesFilter<"Jailsinho"> | boolean
    maxServerUptime?: StringNullableWithAggregatesFilter<"Jailsinho"> | string | null
    popularCommands?: JsonNullableWithAggregatesFilter<"Jailsinho">
    totalChats?: IntWithAggregatesFilter<"Jailsinho"> | number
    totalCommandsExecuted?: IntWithAggregatesFilter<"Jailsinho"> | number
    totalMessagesReceived?: IntWithAggregatesFilter<"Jailsinho"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Jailsinho"> | Date | string
  }

  export type PrivateChatsWhereInput = {
    AND?: PrivateChatsWhereInput | PrivateChatsWhereInput[]
    OR?: PrivateChatsWhereInput[]
    NOT?: PrivateChatsWhereInput | PrivateChatsWhereInput[]
    createdAt?: DateTimeFilter<"PrivateChats"> | Date | string
    id?: StringFilter<"PrivateChats"> | string
    chatId?: StringFilter<"PrivateChats"> | string
    isGroup?: BoolFilter<"PrivateChats"> | boolean
    isReadOnly?: BoolFilter<"PrivateChats"> | boolean
    name?: StringFilter<"PrivateChats"> | string
    popularCommands?: JsonNullableFilter<"PrivateChats">
    timestamp?: IntFilter<"PrivateChats"> | number
    totalCommandsExecuted?: IntFilter<"PrivateChats"> | number
    totalMessagesReceived?: IntFilter<"PrivateChats"> | number
    tags?: XOR<TagsCompositeFilter, TagsObjectEqualityInput>
    updatedAt?: DateTimeFilter<"PrivateChats"> | Date | string
  }

  export type PrivateChatsOrderByWithRelationInput = {
    createdAt?: SortOrder
    id?: SortOrder
    chatId?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    name?: SortOrder
    popularCommands?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    tags?: TagsOrderByInput
    updatedAt?: SortOrder
  }

  export type PrivateChatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId?: string
    AND?: PrivateChatsWhereInput | PrivateChatsWhereInput[]
    OR?: PrivateChatsWhereInput[]
    NOT?: PrivateChatsWhereInput | PrivateChatsWhereInput[]
    createdAt?: DateTimeFilter<"PrivateChats"> | Date | string
    isGroup?: BoolFilter<"PrivateChats"> | boolean
    isReadOnly?: BoolFilter<"PrivateChats"> | boolean
    name?: StringFilter<"PrivateChats"> | string
    popularCommands?: JsonNullableFilter<"PrivateChats">
    timestamp?: IntFilter<"PrivateChats"> | number
    totalCommandsExecuted?: IntFilter<"PrivateChats"> | number
    totalMessagesReceived?: IntFilter<"PrivateChats"> | number
    tags?: XOR<TagsCompositeFilter, TagsObjectEqualityInput>
    updatedAt?: DateTimeFilter<"PrivateChats"> | Date | string
  }, "id" | "chatId">

  export type PrivateChatsOrderByWithAggregationInput = {
    createdAt?: SortOrder
    id?: SortOrder
    chatId?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    name?: SortOrder
    popularCommands?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
    _count?: PrivateChatsCountOrderByAggregateInput
    _avg?: PrivateChatsAvgOrderByAggregateInput
    _max?: PrivateChatsMaxOrderByAggregateInput
    _min?: PrivateChatsMinOrderByAggregateInput
    _sum?: PrivateChatsSumOrderByAggregateInput
  }

  export type PrivateChatsScalarWhereWithAggregatesInput = {
    AND?: PrivateChatsScalarWhereWithAggregatesInput | PrivateChatsScalarWhereWithAggregatesInput[]
    OR?: PrivateChatsScalarWhereWithAggregatesInput[]
    NOT?: PrivateChatsScalarWhereWithAggregatesInput | PrivateChatsScalarWhereWithAggregatesInput[]
    createdAt?: DateTimeWithAggregatesFilter<"PrivateChats"> | Date | string
    id?: StringWithAggregatesFilter<"PrivateChats"> | string
    chatId?: StringWithAggregatesFilter<"PrivateChats"> | string
    isGroup?: BoolWithAggregatesFilter<"PrivateChats"> | boolean
    isReadOnly?: BoolWithAggregatesFilter<"PrivateChats"> | boolean
    name?: StringWithAggregatesFilter<"PrivateChats"> | string
    popularCommands?: JsonNullableWithAggregatesFilter<"PrivateChats">
    timestamp?: IntWithAggregatesFilter<"PrivateChats"> | number
    totalCommandsExecuted?: IntWithAggregatesFilter<"PrivateChats"> | number
    totalMessagesReceived?: IntWithAggregatesFilter<"PrivateChats"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"PrivateChats"> | Date | string
  }

  export type GroupChatsWhereInput = {
    AND?: GroupChatsWhereInput | GroupChatsWhereInput[]
    OR?: GroupChatsWhereInput[]
    NOT?: GroupChatsWhereInput | GroupChatsWhereInput[]
    blockedUsers?: StringNullableListFilter<"GroupChats">
    commandsPerMember?: JsonNullableFilter<"GroupChats">
    createdAt?: DateTimeFilter<"GroupChats"> | Date | string
    description?: StringFilter<"GroupChats"> | string
    groupId?: StringFilter<"GroupChats"> | string
    id?: StringFilter<"GroupChats"> | string
    isGroup?: BoolFilter<"GroupChats"> | boolean
    isReadOnly?: BoolFilter<"GroupChats"> | boolean
    maxParticipants?: IntFilter<"GroupChats"> | number
    messagesPerMember?: JsonNullableFilter<"GroupChats">
    mutedWords?: StringNullableListFilter<"GroupChats">
    name?: StringFilter<"GroupChats"> | string
    popularCommands?: JsonNullableFilter<"GroupChats">
    tags?: XOR<TagsCompositeFilter, TagsObjectEqualityInput>
    timestamp?: IntFilter<"GroupChats"> | number
    totalCommandsExecuted?: IntFilter<"GroupChats"> | number
    totalMembers?: IntFilter<"GroupChats"> | number
    totalMessagesReceived?: IntFilter<"GroupChats"> | number
    updatedAt?: DateTimeFilter<"GroupChats"> | Date | string
    welcomeMessage?: StringFilter<"GroupChats"> | string
  }

  export type GroupChatsOrderByWithRelationInput = {
    blockedUsers?: SortOrder
    commandsPerMember?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    id?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    maxParticipants?: SortOrder
    messagesPerMember?: SortOrder
    mutedWords?: SortOrder
    name?: SortOrder
    popularCommands?: SortOrder
    tags?: TagsOrderByInput
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMembers?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
    welcomeMessage?: SortOrder
  }

  export type GroupChatsWhereUniqueInput = Prisma.AtLeast<{
    groupId?: string
    id?: string
    AND?: GroupChatsWhereInput | GroupChatsWhereInput[]
    OR?: GroupChatsWhereInput[]
    NOT?: GroupChatsWhereInput | GroupChatsWhereInput[]
    blockedUsers?: StringNullableListFilter<"GroupChats">
    commandsPerMember?: JsonNullableFilter<"GroupChats">
    createdAt?: DateTimeFilter<"GroupChats"> | Date | string
    description?: StringFilter<"GroupChats"> | string
    isGroup?: BoolFilter<"GroupChats"> | boolean
    isReadOnly?: BoolFilter<"GroupChats"> | boolean
    maxParticipants?: IntFilter<"GroupChats"> | number
    messagesPerMember?: JsonNullableFilter<"GroupChats">
    mutedWords?: StringNullableListFilter<"GroupChats">
    name?: StringFilter<"GroupChats"> | string
    popularCommands?: JsonNullableFilter<"GroupChats">
    tags?: XOR<TagsCompositeFilter, TagsObjectEqualityInput>
    timestamp?: IntFilter<"GroupChats"> | number
    totalCommandsExecuted?: IntFilter<"GroupChats"> | number
    totalMembers?: IntFilter<"GroupChats"> | number
    totalMessagesReceived?: IntFilter<"GroupChats"> | number
    updatedAt?: DateTimeFilter<"GroupChats"> | Date | string
    welcomeMessage?: StringFilter<"GroupChats"> | string
  }, "id" | "groupId">

  export type GroupChatsOrderByWithAggregationInput = {
    blockedUsers?: SortOrder
    commandsPerMember?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    id?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    maxParticipants?: SortOrder
    messagesPerMember?: SortOrder
    mutedWords?: SortOrder
    name?: SortOrder
    popularCommands?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMembers?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
    welcomeMessage?: SortOrder
    _count?: GroupChatsCountOrderByAggregateInput
    _avg?: GroupChatsAvgOrderByAggregateInput
    _max?: GroupChatsMaxOrderByAggregateInput
    _min?: GroupChatsMinOrderByAggregateInput
    _sum?: GroupChatsSumOrderByAggregateInput
  }

  export type GroupChatsScalarWhereWithAggregatesInput = {
    AND?: GroupChatsScalarWhereWithAggregatesInput | GroupChatsScalarWhereWithAggregatesInput[]
    OR?: GroupChatsScalarWhereWithAggregatesInput[]
    NOT?: GroupChatsScalarWhereWithAggregatesInput | GroupChatsScalarWhereWithAggregatesInput[]
    blockedUsers?: StringNullableListFilter<"GroupChats">
    commandsPerMember?: JsonNullableWithAggregatesFilter<"GroupChats">
    createdAt?: DateTimeWithAggregatesFilter<"GroupChats"> | Date | string
    description?: StringWithAggregatesFilter<"GroupChats"> | string
    groupId?: StringWithAggregatesFilter<"GroupChats"> | string
    id?: StringWithAggregatesFilter<"GroupChats"> | string
    isGroup?: BoolWithAggregatesFilter<"GroupChats"> | boolean
    isReadOnly?: BoolWithAggregatesFilter<"GroupChats"> | boolean
    maxParticipants?: IntWithAggregatesFilter<"GroupChats"> | number
    messagesPerMember?: JsonNullableWithAggregatesFilter<"GroupChats">
    mutedWords?: StringNullableListFilter<"GroupChats">
    name?: StringWithAggregatesFilter<"GroupChats"> | string
    popularCommands?: JsonNullableWithAggregatesFilter<"GroupChats">
    timestamp?: IntWithAggregatesFilter<"GroupChats"> | number
    totalCommandsExecuted?: IntWithAggregatesFilter<"GroupChats"> | number
    totalMembers?: IntWithAggregatesFilter<"GroupChats"> | number
    totalMessagesReceived?: IntWithAggregatesFilter<"GroupChats"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"GroupChats"> | Date | string
    welcomeMessage?: StringWithAggregatesFilter<"GroupChats"> | string
  }

  export type GroupListWhereInput = {
    AND?: GroupListWhereInput | GroupListWhereInput[]
    OR?: GroupListWhereInput[]
    NOT?: GroupListWhereInput | GroupListWhereInput[]
    id?: StringFilter<"GroupList"> | string
    groupId?: StringFilter<"GroupList"> | string
    timer?: IntFilter<"GroupList"> | number
    lastAutoMessage?: DateTimeFilter<"GroupList"> | Date | string
    subscribers?: GroupListSubscriberCompositeListFilter | GroupListSubscriberObjectEqualityInput[]
  }

  export type GroupListOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    timer?: SortOrder
    lastAutoMessage?: SortOrder
    subscribers?: GroupListSubscriberOrderByCompositeAggregateInput
  }

  export type GroupListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId?: string
    AND?: GroupListWhereInput | GroupListWhereInput[]
    OR?: GroupListWhereInput[]
    NOT?: GroupListWhereInput | GroupListWhereInput[]
    timer?: IntFilter<"GroupList"> | number
    lastAutoMessage?: DateTimeFilter<"GroupList"> | Date | string
    subscribers?: GroupListSubscriberCompositeListFilter | GroupListSubscriberObjectEqualityInput[]
  }, "id" | "groupId">

  export type GroupListOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    timer?: SortOrder
    lastAutoMessage?: SortOrder
    _count?: GroupListCountOrderByAggregateInput
    _avg?: GroupListAvgOrderByAggregateInput
    _max?: GroupListMaxOrderByAggregateInput
    _min?: GroupListMinOrderByAggregateInput
    _sum?: GroupListSumOrderByAggregateInput
  }

  export type GroupListScalarWhereWithAggregatesInput = {
    AND?: GroupListScalarWhereWithAggregatesInput | GroupListScalarWhereWithAggregatesInput[]
    OR?: GroupListScalarWhereWithAggregatesInput[]
    NOT?: GroupListScalarWhereWithAggregatesInput | GroupListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupList"> | string
    groupId?: StringWithAggregatesFilter<"GroupList"> | string
    timer?: IntWithAggregatesFilter<"GroupList"> | number
    lastAutoMessage?: DateTimeWithAggregatesFilter<"GroupList"> | Date | string
  }

  export type VoteBanPollWhereInput = {
    AND?: VoteBanPollWhereInput | VoteBanPollWhereInput[]
    OR?: VoteBanPollWhereInput[]
    NOT?: VoteBanPollWhereInput | VoteBanPollWhereInput[]
    id?: StringFilter<"VoteBanPoll"> | string
    groupId?: StringFilter<"VoteBanPoll"> | string
    defendant?: StringNullableFilter<"VoteBanPoll"> | string | null
    description?: StringNullableFilter<"VoteBanPoll"> | string | null
    maxVotes?: IntNullableFilter<"VoteBanPoll"> | number | null
    maxTime?: IntNullableFilter<"VoteBanPoll"> | number | null
    pool?: VoteBanVotesCompositeListFilter | VoteBanVotesObjectEqualityInput[]
    createdAt?: DateTimeFilter<"VoteBanPoll"> | Date | string
  }

  export type VoteBanPollOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    defendant?: SortOrder
    description?: SortOrder
    maxVotes?: SortOrder
    maxTime?: SortOrder
    pool?: VoteBanVotesOrderByCompositeAggregateInput
    createdAt?: SortOrder
  }

  export type VoteBanPollWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    groupId?: string
    AND?: VoteBanPollWhereInput | VoteBanPollWhereInput[]
    OR?: VoteBanPollWhereInput[]
    NOT?: VoteBanPollWhereInput | VoteBanPollWhereInput[]
    defendant?: StringNullableFilter<"VoteBanPoll"> | string | null
    description?: StringNullableFilter<"VoteBanPoll"> | string | null
    maxVotes?: IntNullableFilter<"VoteBanPoll"> | number | null
    maxTime?: IntNullableFilter<"VoteBanPoll"> | number | null
    pool?: VoteBanVotesCompositeListFilter | VoteBanVotesObjectEqualityInput[]
    createdAt?: DateTimeFilter<"VoteBanPoll"> | Date | string
  }, "id" | "groupId">

  export type VoteBanPollOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    defendant?: SortOrder
    description?: SortOrder
    maxVotes?: SortOrder
    maxTime?: SortOrder
    createdAt?: SortOrder
    _count?: VoteBanPollCountOrderByAggregateInput
    _avg?: VoteBanPollAvgOrderByAggregateInput
    _max?: VoteBanPollMaxOrderByAggregateInput
    _min?: VoteBanPollMinOrderByAggregateInput
    _sum?: VoteBanPollSumOrderByAggregateInput
  }

  export type VoteBanPollScalarWhereWithAggregatesInput = {
    AND?: VoteBanPollScalarWhereWithAggregatesInput | VoteBanPollScalarWhereWithAggregatesInput[]
    OR?: VoteBanPollScalarWhereWithAggregatesInput[]
    NOT?: VoteBanPollScalarWhereWithAggregatesInput | VoteBanPollScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoteBanPoll"> | string
    groupId?: StringWithAggregatesFilter<"VoteBanPoll"> | string
    defendant?: StringNullableWithAggregatesFilter<"VoteBanPoll"> | string | null
    description?: StringNullableWithAggregatesFilter<"VoteBanPoll"> | string | null
    maxVotes?: IntNullableWithAggregatesFilter<"VoteBanPoll"> | number | null
    maxTime?: IntNullableWithAggregatesFilter<"VoteBanPoll"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"VoteBanPoll"> | Date | string
  }

  export type ContactFormsWhereInput = {
    AND?: ContactFormsWhereInput | ContactFormsWhereInput[]
    OR?: ContactFormsWhereInput[]
    NOT?: ContactFormsWhereInput | ContactFormsWhereInput[]
    id?: StringFilter<"ContactForms"> | string
    owner?: StringFilter<"ContactForms"> | string
    sendTo?: XOR<SendToCompositeFilter, SendToObjectEqualityInput>
    contacts?: ContactFormsToSentCompositeListFilter | ContactFormsToSentObjectEqualityInput[]
    createdAt?: DateTimeFilter<"ContactForms"> | Date | string
    updatedAt?: DateTimeFilter<"ContactForms"> | Date | string
  }

  export type ContactFormsOrderByWithRelationInput = {
    id?: SortOrder
    owner?: SortOrder
    sendTo?: SendToOrderByInput
    contacts?: ContactFormsToSentOrderByCompositeAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactFormsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    owner?: string
    AND?: ContactFormsWhereInput | ContactFormsWhereInput[]
    OR?: ContactFormsWhereInput[]
    NOT?: ContactFormsWhereInput | ContactFormsWhereInput[]
    sendTo?: XOR<SendToCompositeFilter, SendToObjectEqualityInput>
    contacts?: ContactFormsToSentCompositeListFilter | ContactFormsToSentObjectEqualityInput[]
    createdAt?: DateTimeFilter<"ContactForms"> | Date | string
    updatedAt?: DateTimeFilter<"ContactForms"> | Date | string
  }, "id" | "owner">

  export type ContactFormsOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactFormsCountOrderByAggregateInput
    _max?: ContactFormsMaxOrderByAggregateInput
    _min?: ContactFormsMinOrderByAggregateInput
  }

  export type ContactFormsScalarWhereWithAggregatesInput = {
    AND?: ContactFormsScalarWhereWithAggregatesInput | ContactFormsScalarWhereWithAggregatesInput[]
    OR?: ContactFormsScalarWhereWithAggregatesInput[]
    NOT?: ContactFormsScalarWhereWithAggregatesInput | ContactFormsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactForms"> | string
    owner?: StringWithAggregatesFilter<"ContactForms"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ContactForms"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactForms"> | Date | string
  }

  export type JailsinhoCreateInput = {
    createdAt?: Date | string
    counters: XOR<CountersCreateEnvelopeInput, CountersCreateInput>
    dateTimeUptime: Date | string
    id: number
    maintenanceMode: boolean
    maxServerUptime?: string | null
    popularCommands?: InputJsonValue | null
    totalChats: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    updatedAt?: Date | string
  }

  export type JailsinhoUncheckedCreateInput = {
    createdAt?: Date | string
    counters: XOR<CountersCreateEnvelopeInput, CountersCreateInput>
    dateTimeUptime: Date | string
    id: number
    maintenanceMode: boolean
    maxServerUptime?: string | null
    popularCommands?: InputJsonValue | null
    totalChats: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    updatedAt?: Date | string
  }

  export type JailsinhoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    counters?: XOR<CountersUpdateEnvelopeInput, CountersCreateInput>
    dateTimeUptime?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    maxServerUptime?: NullableStringFieldUpdateOperationsInput | string | null
    popularCommands?: InputJsonValue | InputJsonValue | null
    totalChats?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JailsinhoUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    counters?: XOR<CountersUpdateEnvelopeInput, CountersCreateInput>
    dateTimeUptime?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    maxServerUptime?: NullableStringFieldUpdateOperationsInput | string | null
    popularCommands?: InputJsonValue | InputJsonValue | null
    totalChats?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JailsinhoCreateManyInput = {
    createdAt?: Date | string
    counters: XOR<CountersCreateEnvelopeInput, CountersCreateInput>
    dateTimeUptime: Date | string
    id: number
    maintenanceMode: boolean
    maxServerUptime?: string | null
    popularCommands?: InputJsonValue | null
    totalChats: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    updatedAt?: Date | string
  }

  export type JailsinhoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    counters?: XOR<CountersUpdateEnvelopeInput, CountersCreateInput>
    dateTimeUptime?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    maxServerUptime?: NullableStringFieldUpdateOperationsInput | string | null
    popularCommands?: InputJsonValue | InputJsonValue | null
    totalChats?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JailsinhoUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    counters?: XOR<CountersUpdateEnvelopeInput, CountersCreateInput>
    dateTimeUptime?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    maxServerUptime?: NullableStringFieldUpdateOperationsInput | string | null
    popularCommands?: InputJsonValue | InputJsonValue | null
    totalChats?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatsCreateInput = {
    createdAt?: Date | string
    id?: string
    chatId: string
    isGroup: boolean
    isReadOnly: boolean
    name: string
    popularCommands?: InputJsonValue | null
    timestamp: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    tags: XOR<TagsCreateEnvelopeInput, TagsCreateInput>
    updatedAt?: Date | string
  }

  export type PrivateChatsUncheckedCreateInput = {
    createdAt?: Date | string
    id?: string
    chatId: string
    isGroup: boolean
    isReadOnly: boolean
    name: string
    popularCommands?: InputJsonValue | null
    timestamp: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    tags: XOR<TagsCreateEnvelopeInput, TagsCreateInput>
    updatedAt?: Date | string
  }

  export type PrivateChatsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    popularCommands?: InputJsonValue | InputJsonValue | null
    timestamp?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    tags?: XOR<TagsUpdateEnvelopeInput, TagsCreateInput>
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatsUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    popularCommands?: InputJsonValue | InputJsonValue | null
    timestamp?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    tags?: XOR<TagsUpdateEnvelopeInput, TagsCreateInput>
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatsCreateManyInput = {
    createdAt?: Date | string
    id?: string
    chatId: string
    isGroup: boolean
    isReadOnly: boolean
    name: string
    popularCommands?: InputJsonValue | null
    timestamp: number
    totalCommandsExecuted: number
    totalMessagesReceived: number
    tags: XOR<TagsCreateEnvelopeInput, TagsCreateInput>
    updatedAt?: Date | string
  }

  export type PrivateChatsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    popularCommands?: InputJsonValue | InputJsonValue | null
    timestamp?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    tags?: XOR<TagsUpdateEnvelopeInput, TagsCreateInput>
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrivateChatsUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatId?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    popularCommands?: InputJsonValue | InputJsonValue | null
    timestamp?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    tags?: XOR<TagsUpdateEnvelopeInput, TagsCreateInput>
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupChatsCreateInput = {
    blockedUsers?: GroupChatsCreateblockedUsersInput | string[]
    commandsPerMember?: InputJsonValue | null
    createdAt?: Date | string
    description: string
    groupId: string
    id?: string
    isGroup: boolean
    isReadOnly: boolean
    maxParticipants: number
    messagesPerMember?: InputJsonValue | null
    mutedWords?: GroupChatsCreatemutedWordsInput | string[]
    name: string
    popularCommands?: InputJsonValue | null
    tags: XOR<TagsCreateEnvelopeInput, TagsCreateInput>
    timestamp: number
    totalCommandsExecuted: number
    totalMembers: number
    totalMessagesReceived: number
    updatedAt?: Date | string
    welcomeMessage?: string
  }

  export type GroupChatsUncheckedCreateInput = {
    blockedUsers?: GroupChatsCreateblockedUsersInput | string[]
    commandsPerMember?: InputJsonValue | null
    createdAt?: Date | string
    description: string
    groupId: string
    id?: string
    isGroup: boolean
    isReadOnly: boolean
    maxParticipants: number
    messagesPerMember?: InputJsonValue | null
    mutedWords?: GroupChatsCreatemutedWordsInput | string[]
    name: string
    popularCommands?: InputJsonValue | null
    tags: XOR<TagsCreateEnvelopeInput, TagsCreateInput>
    timestamp: number
    totalCommandsExecuted: number
    totalMembers: number
    totalMessagesReceived: number
    updatedAt?: Date | string
    welcomeMessage?: string
  }

  export type GroupChatsUpdateInput = {
    blockedUsers?: GroupChatsUpdateblockedUsersInput | string[]
    commandsPerMember?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    maxParticipants?: IntFieldUpdateOperationsInput | number
    messagesPerMember?: InputJsonValue | InputJsonValue | null
    mutedWords?: GroupChatsUpdatemutedWordsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    popularCommands?: InputJsonValue | InputJsonValue | null
    tags?: XOR<TagsUpdateEnvelopeInput, TagsCreateInput>
    timestamp?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMembers?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
  }

  export type GroupChatsUncheckedUpdateInput = {
    blockedUsers?: GroupChatsUpdateblockedUsersInput | string[]
    commandsPerMember?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    maxParticipants?: IntFieldUpdateOperationsInput | number
    messagesPerMember?: InputJsonValue | InputJsonValue | null
    mutedWords?: GroupChatsUpdatemutedWordsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    popularCommands?: InputJsonValue | InputJsonValue | null
    tags?: XOR<TagsUpdateEnvelopeInput, TagsCreateInput>
    timestamp?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMembers?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
  }

  export type GroupChatsCreateManyInput = {
    blockedUsers?: GroupChatsCreateblockedUsersInput | string[]
    commandsPerMember?: InputJsonValue | null
    createdAt?: Date | string
    description: string
    groupId: string
    id?: string
    isGroup: boolean
    isReadOnly: boolean
    maxParticipants: number
    messagesPerMember?: InputJsonValue | null
    mutedWords?: GroupChatsCreatemutedWordsInput | string[]
    name: string
    popularCommands?: InputJsonValue | null
    tags: XOR<TagsCreateEnvelopeInput, TagsCreateInput>
    timestamp: number
    totalCommandsExecuted: number
    totalMembers: number
    totalMessagesReceived: number
    updatedAt?: Date | string
    welcomeMessage?: string
  }

  export type GroupChatsUpdateManyMutationInput = {
    blockedUsers?: GroupChatsUpdateblockedUsersInput | string[]
    commandsPerMember?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    maxParticipants?: IntFieldUpdateOperationsInput | number
    messagesPerMember?: InputJsonValue | InputJsonValue | null
    mutedWords?: GroupChatsUpdatemutedWordsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    popularCommands?: InputJsonValue | InputJsonValue | null
    tags?: XOR<TagsUpdateEnvelopeInput, TagsCreateInput>
    timestamp?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMembers?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
  }

  export type GroupChatsUncheckedUpdateManyInput = {
    blockedUsers?: GroupChatsUpdateblockedUsersInput | string[]
    commandsPerMember?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    isGroup?: BoolFieldUpdateOperationsInput | boolean
    isReadOnly?: BoolFieldUpdateOperationsInput | boolean
    maxParticipants?: IntFieldUpdateOperationsInput | number
    messagesPerMember?: InputJsonValue | InputJsonValue | null
    mutedWords?: GroupChatsUpdatemutedWordsInput | string[]
    name?: StringFieldUpdateOperationsInput | string
    popularCommands?: InputJsonValue | InputJsonValue | null
    tags?: XOR<TagsUpdateEnvelopeInput, TagsCreateInput>
    timestamp?: IntFieldUpdateOperationsInput | number
    totalCommandsExecuted?: IntFieldUpdateOperationsInput | number
    totalMembers?: IntFieldUpdateOperationsInput | number
    totalMessagesReceived?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    welcomeMessage?: StringFieldUpdateOperationsInput | string
  }

  export type GroupListCreateInput = {
    id?: string
    groupId: string
    timer?: number
    lastAutoMessage: Date | string
    subscribers?: XOR<GroupListSubscriberListCreateEnvelopeInput, GroupListSubscriberCreateInput> | GroupListSubscriberCreateInput[]
  }

  export type GroupListUncheckedCreateInput = {
    id?: string
    groupId: string
    timer?: number
    lastAutoMessage: Date | string
    subscribers?: XOR<GroupListSubscriberListCreateEnvelopeInput, GroupListSubscriberCreateInput> | GroupListSubscriberCreateInput[]
  }

  export type GroupListUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    timer?: IntFieldUpdateOperationsInput | number
    lastAutoMessage?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribers?: XOR<GroupListSubscriberListUpdateEnvelopeInput, GroupListSubscriberCreateInput> | GroupListSubscriberCreateInput[]
  }

  export type GroupListUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    timer?: IntFieldUpdateOperationsInput | number
    lastAutoMessage?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribers?: XOR<GroupListSubscriberListUpdateEnvelopeInput, GroupListSubscriberCreateInput> | GroupListSubscriberCreateInput[]
  }

  export type GroupListCreateManyInput = {
    id?: string
    groupId: string
    timer?: number
    lastAutoMessage: Date | string
    subscribers?: XOR<GroupListSubscriberListCreateEnvelopeInput, GroupListSubscriberCreateInput> | GroupListSubscriberCreateInput[]
  }

  export type GroupListUpdateManyMutationInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    timer?: IntFieldUpdateOperationsInput | number
    lastAutoMessage?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribers?: XOR<GroupListSubscriberListUpdateEnvelopeInput, GroupListSubscriberCreateInput> | GroupListSubscriberCreateInput[]
  }

  export type GroupListUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    timer?: IntFieldUpdateOperationsInput | number
    lastAutoMessage?: DateTimeFieldUpdateOperationsInput | Date | string
    subscribers?: XOR<GroupListSubscriberListUpdateEnvelopeInput, GroupListSubscriberCreateInput> | GroupListSubscriberCreateInput[]
  }

  export type VoteBanPollCreateInput = {
    id?: string
    groupId: string
    defendant?: string | null
    description?: string | null
    maxVotes?: number | null
    maxTime?: number | null
    pool?: XOR<VoteBanVotesListCreateEnvelopeInput, VoteBanVotesCreateInput> | VoteBanVotesCreateInput[]
    createdAt?: Date | string
  }

  export type VoteBanPollUncheckedCreateInput = {
    id?: string
    groupId: string
    defendant?: string | null
    description?: string | null
    maxVotes?: number | null
    maxTime?: number | null
    pool?: XOR<VoteBanVotesListCreateEnvelopeInput, VoteBanVotesCreateInput> | VoteBanVotesCreateInput[]
    createdAt?: Date | string
  }

  export type VoteBanPollUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    defendant?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: NullableIntFieldUpdateOperationsInput | number | null
    maxTime?: NullableIntFieldUpdateOperationsInput | number | null
    pool?: XOR<VoteBanVotesListUpdateEnvelopeInput, VoteBanVotesCreateInput> | VoteBanVotesCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteBanPollUncheckedUpdateInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    defendant?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: NullableIntFieldUpdateOperationsInput | number | null
    maxTime?: NullableIntFieldUpdateOperationsInput | number | null
    pool?: XOR<VoteBanVotesListUpdateEnvelopeInput, VoteBanVotesCreateInput> | VoteBanVotesCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteBanPollCreateManyInput = {
    id?: string
    groupId: string
    defendant?: string | null
    description?: string | null
    maxVotes?: number | null
    maxTime?: number | null
    pool?: XOR<VoteBanVotesListCreateEnvelopeInput, VoteBanVotesCreateInput> | VoteBanVotesCreateInput[]
    createdAt?: Date | string
  }

  export type VoteBanPollUpdateManyMutationInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    defendant?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: NullableIntFieldUpdateOperationsInput | number | null
    maxTime?: NullableIntFieldUpdateOperationsInput | number | null
    pool?: XOR<VoteBanVotesListUpdateEnvelopeInput, VoteBanVotesCreateInput> | VoteBanVotesCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteBanPollUncheckedUpdateManyInput = {
    groupId?: StringFieldUpdateOperationsInput | string
    defendant?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    maxVotes?: NullableIntFieldUpdateOperationsInput | number | null
    maxTime?: NullableIntFieldUpdateOperationsInput | number | null
    pool?: XOR<VoteBanVotesListUpdateEnvelopeInput, VoteBanVotesCreateInput> | VoteBanVotesCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFormsCreateInput = {
    id?: string
    owner: string
    sendTo: XOR<SendToCreateEnvelopeInput, SendToCreateInput>
    contacts?: XOR<ContactFormsToSentListCreateEnvelopeInput, ContactFormsToSentCreateInput> | ContactFormsToSentCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactFormsUncheckedCreateInput = {
    id?: string
    owner: string
    sendTo: XOR<SendToCreateEnvelopeInput, SendToCreateInput>
    contacts?: XOR<ContactFormsToSentListCreateEnvelopeInput, ContactFormsToSentCreateInput> | ContactFormsToSentCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactFormsUpdateInput = {
    owner?: StringFieldUpdateOperationsInput | string
    sendTo?: XOR<SendToUpdateEnvelopeInput, SendToCreateInput>
    contacts?: XOR<ContactFormsToSentListUpdateEnvelopeInput, ContactFormsToSentCreateInput> | ContactFormsToSentCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFormsUncheckedUpdateInput = {
    owner?: StringFieldUpdateOperationsInput | string
    sendTo?: XOR<SendToUpdateEnvelopeInput, SendToCreateInput>
    contacts?: XOR<ContactFormsToSentListUpdateEnvelopeInput, ContactFormsToSentCreateInput> | ContactFormsToSentCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFormsCreateManyInput = {
    id?: string
    owner: string
    sendTo: XOR<SendToCreateEnvelopeInput, SendToCreateInput>
    contacts?: XOR<ContactFormsToSentListCreateEnvelopeInput, ContactFormsToSentCreateInput> | ContactFormsToSentCreateInput[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactFormsUpdateManyMutationInput = {
    owner?: StringFieldUpdateOperationsInput | string
    sendTo?: XOR<SendToUpdateEnvelopeInput, SendToCreateInput>
    contacts?: XOR<ContactFormsToSentListUpdateEnvelopeInput, ContactFormsToSentCreateInput> | ContactFormsToSentCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactFormsUncheckedUpdateManyInput = {
    owner?: StringFieldUpdateOperationsInput | string
    sendTo?: XOR<SendToUpdateEnvelopeInput, SendToCreateInput>
    contacts?: XOR<ContactFormsToSentListUpdateEnvelopeInput, ContactFormsToSentCreateInput> | ContactFormsToSentCreateInput[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CountersCompositeFilter = {
    equals?: CountersObjectEqualityInput
    is?: CountersWhereInput
    isNot?: CountersWhereInput
  }

  export type CountersObjectEqualityInput = {
    obrigado?: number | null
    teAmo?: number | null
    fodaSe?: number | null
    isqueiro?: number | null
    gay?: number | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type CountersOrderByInput = {
    obrigado?: SortOrder
    teAmo?: SortOrder
    fodaSe?: SortOrder
    isqueiro?: SortOrder
    gay?: SortOrder
  }

  export type JailsinhoCountOrderByAggregateInput = {
    createdAt?: SortOrder
    dateTimeUptime?: SortOrder
    id?: SortOrder
    maintenanceMode?: SortOrder
    maxServerUptime?: SortOrder
    popularCommands?: SortOrder
    totalChats?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
  }

  export type JailsinhoAvgOrderByAggregateInput = {
    id?: SortOrder
    totalChats?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
  }

  export type JailsinhoMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    dateTimeUptime?: SortOrder
    id?: SortOrder
    maintenanceMode?: SortOrder
    maxServerUptime?: SortOrder
    totalChats?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
  }

  export type JailsinhoMinOrderByAggregateInput = {
    createdAt?: SortOrder
    dateTimeUptime?: SortOrder
    id?: SortOrder
    maintenanceMode?: SortOrder
    maxServerUptime?: SortOrder
    totalChats?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
  }

  export type JailsinhoSumOrderByAggregateInput = {
    id?: SortOrder
    totalChats?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
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

  export type TagsCompositeFilter = {
    equals?: TagsObjectEqualityInput
    is?: TagsWhereInput
    isNot?: TagsWhereInput
  }

  export type TagsObjectEqualityInput = {
    superAdmin: boolean
    notifyStart: boolean
    user: boolean
    admin: boolean
    blocked: boolean
    autoSticker: boolean
    newsletter: boolean
    autoMessage: number
  }

  export type TagsOrderByInput = {
    superAdmin?: SortOrder
    notifyStart?: SortOrder
    user?: SortOrder
    admin?: SortOrder
    blocked?: SortOrder
    autoSticker?: SortOrder
    newsletter?: SortOrder
    autoMessage?: SortOrder
  }

  export type PrivateChatsCountOrderByAggregateInput = {
    createdAt?: SortOrder
    id?: SortOrder
    chatId?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    name?: SortOrder
    popularCommands?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateChatsAvgOrderByAggregateInput = {
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
  }

  export type PrivateChatsMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    id?: SortOrder
    chatId?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateChatsMinOrderByAggregateInput = {
    createdAt?: SortOrder
    id?: SortOrder
    chatId?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrivateChatsSumOrderByAggregateInput = {
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMessagesReceived?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type GroupChatsCountOrderByAggregateInput = {
    blockedUsers?: SortOrder
    commandsPerMember?: SortOrder
    createdAt?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    id?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    maxParticipants?: SortOrder
    messagesPerMember?: SortOrder
    mutedWords?: SortOrder
    name?: SortOrder
    popularCommands?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMembers?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
    welcomeMessage?: SortOrder
  }

  export type GroupChatsAvgOrderByAggregateInput = {
    maxParticipants?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMembers?: SortOrder
    totalMessagesReceived?: SortOrder
  }

  export type GroupChatsMaxOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    id?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    maxParticipants?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMembers?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
    welcomeMessage?: SortOrder
  }

  export type GroupChatsMinOrderByAggregateInput = {
    createdAt?: SortOrder
    description?: SortOrder
    groupId?: SortOrder
    id?: SortOrder
    isGroup?: SortOrder
    isReadOnly?: SortOrder
    maxParticipants?: SortOrder
    name?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMembers?: SortOrder
    totalMessagesReceived?: SortOrder
    updatedAt?: SortOrder
    welcomeMessage?: SortOrder
  }

  export type GroupChatsSumOrderByAggregateInput = {
    maxParticipants?: SortOrder
    timestamp?: SortOrder
    totalCommandsExecuted?: SortOrder
    totalMembers?: SortOrder
    totalMessagesReceived?: SortOrder
  }

  export type GroupListSubscriberCompositeListFilter = {
    equals?: GroupListSubscriberObjectEqualityInput[]
    every?: GroupListSubscriberWhereInput
    some?: GroupListSubscriberWhereInput
    none?: GroupListSubscriberWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type GroupListSubscriberObjectEqualityInput = {
    number: string
    name: string
    createdAt: Date | string
  }

  export type GroupListSubscriberOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type GroupListCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    timer?: SortOrder
    lastAutoMessage?: SortOrder
  }

  export type GroupListAvgOrderByAggregateInput = {
    timer?: SortOrder
  }

  export type GroupListMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    timer?: SortOrder
    lastAutoMessage?: SortOrder
  }

  export type GroupListMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    timer?: SortOrder
    lastAutoMessage?: SortOrder
  }

  export type GroupListSumOrderByAggregateInput = {
    timer?: SortOrder
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
    isSet?: boolean
  }

  export type VoteBanVotesCompositeListFilter = {
    equals?: VoteBanVotesObjectEqualityInput[]
    every?: VoteBanVotesWhereInput
    some?: VoteBanVotesWhereInput
    none?: VoteBanVotesWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type VoteBanVotesObjectEqualityInput = {
    voteType?: boolean | null
    voter: string
  }

  export type VoteBanVotesOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type VoteBanPollCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    defendant?: SortOrder
    description?: SortOrder
    maxVotes?: SortOrder
    maxTime?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteBanPollAvgOrderByAggregateInput = {
    maxVotes?: SortOrder
    maxTime?: SortOrder
  }

  export type VoteBanPollMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    defendant?: SortOrder
    description?: SortOrder
    maxVotes?: SortOrder
    maxTime?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteBanPollMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    defendant?: SortOrder
    description?: SortOrder
    maxVotes?: SortOrder
    maxTime?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteBanPollSumOrderByAggregateInput = {
    maxVotes?: SortOrder
    maxTime?: SortOrder
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
    isSet?: boolean
  }

  export type SendToCompositeFilter = {
    equals?: SendToObjectEqualityInput
    is?: SendToWhereInput
    isNot?: SendToWhereInput
  }

  export type SendToObjectEqualityInput = {
    name: string
    chatId: string
  }

  export type ContactFormsToSentCompositeListFilter = {
    equals?: ContactFormsToSentObjectEqualityInput[]
    every?: ContactFormsToSentWhereInput
    some?: ContactFormsToSentWhereInput
    none?: ContactFormsToSentWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type ContactFormsToSentObjectEqualityInput = {
    name: string
    phone: string
    email: string
    interest: string
    hasSent: boolean
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SendToOrderByInput = {
    name?: SortOrder
    chatId?: SortOrder
  }

  export type ContactFormsToSentOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ContactFormsCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactFormsMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactFormsMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountersCreateEnvelopeInput = {
    set?: CountersCreateInput
  }

  export type CountersCreateInput = {
    obrigado?: number | null
    teAmo?: number | null
    fodaSe?: number | null
    isqueiro?: number | null
    gay?: number | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CountersUpdateEnvelopeInput = {
    set?: CountersCreateInput
    update?: CountersUpdateInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TagsCreateEnvelopeInput = {
    set?: TagsCreateInput
  }

  export type TagsCreateInput = {
    superAdmin?: boolean
    notifyStart?: boolean
    user?: boolean
    admin?: boolean
    blocked?: boolean
    autoSticker?: boolean
    newsletter?: boolean
    autoMessage?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TagsUpdateEnvelopeInput = {
    set?: TagsCreateInput
    update?: TagsUpdateInput
  }

  export type GroupChatsCreateblockedUsersInput = {
    set: string[]
  }

  export type GroupChatsCreatemutedWordsInput = {
    set: string[]
  }

  export type GroupChatsUpdateblockedUsersInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GroupChatsUpdatemutedWordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GroupListSubscriberListCreateEnvelopeInput = {
    set?: GroupListSubscriberCreateInput | GroupListSubscriberCreateInput[]
  }

  export type GroupListSubscriberCreateInput = {
    number: string
    name: string
    createdAt?: Date | string
  }

  export type GroupListSubscriberListUpdateEnvelopeInput = {
    set?: GroupListSubscriberCreateInput | GroupListSubscriberCreateInput[]
    push?: GroupListSubscriberCreateInput | GroupListSubscriberCreateInput[]
    updateMany?: GroupListSubscriberUpdateManyInput
    deleteMany?: GroupListSubscriberDeleteManyInput
  }

  export type VoteBanVotesListCreateEnvelopeInput = {
    set?: VoteBanVotesCreateInput | VoteBanVotesCreateInput[]
  }

  export type VoteBanVotesCreateInput = {
    voteType?: boolean | null
    voter: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type VoteBanVotesListUpdateEnvelopeInput = {
    set?: VoteBanVotesCreateInput | VoteBanVotesCreateInput[]
    push?: VoteBanVotesCreateInput | VoteBanVotesCreateInput[]
    updateMany?: VoteBanVotesUpdateManyInput
    deleteMany?: VoteBanVotesDeleteManyInput
  }

  export type SendToCreateEnvelopeInput = {
    set?: SendToCreateInput
  }

  export type SendToCreateInput = {
    name: string
    chatId: string
  }

  export type ContactFormsToSentListCreateEnvelopeInput = {
    set?: ContactFormsToSentCreateInput | ContactFormsToSentCreateInput[]
  }

  export type ContactFormsToSentCreateInput = {
    name: string
    phone: string
    email: string
    interest: string
    hasSent?: boolean
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type SendToUpdateEnvelopeInput = {
    set?: SendToCreateInput
    update?: SendToUpdateInput
  }

  export type ContactFormsToSentListUpdateEnvelopeInput = {
    set?: ContactFormsToSentCreateInput | ContactFormsToSentCreateInput[]
    push?: ContactFormsToSentCreateInput | ContactFormsToSentCreateInput[]
    updateMany?: ContactFormsToSentUpdateManyInput
    deleteMany?: ContactFormsToSentDeleteManyInput
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

  export type CountersWhereInput = {
    AND?: CountersWhereInput | CountersWhereInput[]
    OR?: CountersWhereInput[]
    NOT?: CountersWhereInput | CountersWhereInput[]
    obrigado?: IntNullableFilter<"Counters"> | number | null
    teAmo?: IntNullableFilter<"Counters"> | number | null
    fodaSe?: IntNullableFilter<"Counters"> | number | null
    isqueiro?: IntNullableFilter<"Counters"> | number | null
    gay?: IntNullableFilter<"Counters"> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    isSet?: boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
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

  export type TagsWhereInput = {
    AND?: TagsWhereInput | TagsWhereInput[]
    OR?: TagsWhereInput[]
    NOT?: TagsWhereInput | TagsWhereInput[]
    superAdmin?: BoolFilter<"Tags"> | boolean
    notifyStart?: BoolFilter<"Tags"> | boolean
    user?: BoolFilter<"Tags"> | boolean
    admin?: BoolFilter<"Tags"> | boolean
    blocked?: BoolFilter<"Tags"> | boolean
    autoSticker?: BoolFilter<"Tags"> | boolean
    newsletter?: BoolFilter<"Tags"> | boolean
    autoMessage?: IntFilter<"Tags"> | number
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

  export type GroupListSubscriberWhereInput = {
    AND?: GroupListSubscriberWhereInput | GroupListSubscriberWhereInput[]
    OR?: GroupListSubscriberWhereInput[]
    NOT?: GroupListSubscriberWhereInput | GroupListSubscriberWhereInput[]
    number?: StringFilter<"GroupListSubscriber"> | string
    name?: StringFilter<"GroupListSubscriber"> | string
    createdAt?: DateTimeFilter<"GroupListSubscriber"> | Date | string
  }

  export type VoteBanVotesWhereInput = {
    AND?: VoteBanVotesWhereInput | VoteBanVotesWhereInput[]
    OR?: VoteBanVotesWhereInput[]
    NOT?: VoteBanVotesWhereInput | VoteBanVotesWhereInput[]
    voteType?: BoolNullableFilter<"VoteBanVotes"> | boolean | null
    voter?: StringFilter<"VoteBanVotes"> | string
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type SendToWhereInput = {
    AND?: SendToWhereInput | SendToWhereInput[]
    OR?: SendToWhereInput[]
    NOT?: SendToWhereInput | SendToWhereInput[]
    name?: StringFilter<"SendTo"> | string
    chatId?: StringFilter<"SendTo"> | string
  }

  export type ContactFormsToSentWhereInput = {
    AND?: ContactFormsToSentWhereInput | ContactFormsToSentWhereInput[]
    OR?: ContactFormsToSentWhereInput[]
    NOT?: ContactFormsToSentWhereInput | ContactFormsToSentWhereInput[]
    name?: StringFilter<"ContactFormsToSent"> | string
    phone?: StringFilter<"ContactFormsToSent"> | string
    email?: StringFilter<"ContactFormsToSent"> | string
    interest?: StringFilter<"ContactFormsToSent"> | string
    hasSent?: BoolFilter<"ContactFormsToSent"> | boolean
    createdAt?: DateTimeFilter<"ContactFormsToSent"> | Date | string
    updatedAt?: DateTimeFilter<"ContactFormsToSent"> | Date | string
  }

  export type CountersUpdateInput = {
    obrigado?: NullableIntFieldUpdateOperationsInput | number | null
    teAmo?: NullableIntFieldUpdateOperationsInput | number | null
    fodaSe?: NullableIntFieldUpdateOperationsInput | number | null
    isqueiro?: NullableIntFieldUpdateOperationsInput | number | null
    gay?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagsUpdateInput = {
    superAdmin?: BoolFieldUpdateOperationsInput | boolean
    notifyStart?: BoolFieldUpdateOperationsInput | boolean
    user?: BoolFieldUpdateOperationsInput | boolean
    admin?: BoolFieldUpdateOperationsInput | boolean
    blocked?: BoolFieldUpdateOperationsInput | boolean
    autoSticker?: BoolFieldUpdateOperationsInput | boolean
    newsletter?: BoolFieldUpdateOperationsInput | boolean
    autoMessage?: IntFieldUpdateOperationsInput | number
  }

  export type GroupListSubscriberUpdateManyInput = {
    where: GroupListSubscriberWhereInput
    data: GroupListSubscriberUpdateInput
  }

  export type GroupListSubscriberDeleteManyInput = {
    where: GroupListSubscriberWhereInput
  }

  export type VoteBanVotesUpdateManyInput = {
    where: VoteBanVotesWhereInput
    data: VoteBanVotesUpdateInput
  }

  export type VoteBanVotesDeleteManyInput = {
    where: VoteBanVotesWhereInput
  }

  export type SendToUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactFormsToSentUpdateManyInput = {
    where: ContactFormsToSentWhereInput
    data: ContactFormsToSentUpdateInput
  }

  export type ContactFormsToSentDeleteManyInput = {
    where: ContactFormsToSentWhereInput
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type GroupListSubscriberUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteBanVotesUpdateInput = {
    voteType?: NullableBoolFieldUpdateOperationsInput | boolean | null
    voter?: StringFieldUpdateOperationsInput | string
  }

  export type ContactFormsToSentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    hasSent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TagsDefaultArgs instead
     */
    export type TagsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TagsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountersDefaultArgs instead
     */
    export type CountersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CountersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupListSubscriberDefaultArgs instead
     */
    export type GroupListSubscriberArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupListSubscriberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VoteBanVotesDefaultArgs instead
     */
    export type VoteBanVotesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = VoteBanVotesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactFormsToSentDefaultArgs instead
     */
    export type ContactFormsToSentArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ContactFormsToSentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SendToDefaultArgs instead
     */
    export type SendToArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SendToDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JailsinhoDefaultArgs instead
     */
    export type JailsinhoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = JailsinhoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PrivateChatsDefaultArgs instead
     */
    export type PrivateChatsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PrivateChatsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupChatsDefaultArgs instead
     */
    export type GroupChatsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupChatsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupListDefaultArgs instead
     */
    export type GroupListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GroupListDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VoteBanPollDefaultArgs instead
     */
    export type VoteBanPollArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = VoteBanPollDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactFormsDefaultArgs instead
     */
    export type ContactFormsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ContactFormsDefaultArgs<ExtArgs>

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
/**
 * Base class for resolvers.
 */
export abstract class Resolver {
  abstract user: (userId: number) => string;
  abstract activity: (userId: number) => string;
  abstract averageSessions: (userId: number) => string;
  abstract performance: (userId: number) => string;
}

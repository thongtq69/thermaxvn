import { MongoClient, ObjectId, type Db } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var thermaxMongoClientPromise: Promise<MongoClient> | undefined;
}

export function isMongoConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

export async function getDb(): Promise<Db> {
  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MONGODB_URI");
  }

  if (!globalThis.thermaxMongoClientPromise) {
    const client = new MongoClient(process.env.MONGODB_URI);
    globalThis.thermaxMongoClientPromise = client.connect();
  }

  const client = await globalThis.thermaxMongoClientPromise;
  return client.db(process.env.MONGODB_DB || "thermaxvn");
}

export function serializeDocument<T extends { _id?: ObjectId }>(document: T) {
  const { _id, ...rest } = document;
  return { id: _id?.toString(), ...rest };
}

export function toObjectId(id: string) {
  return ObjectId.isValid(id) ? new ObjectId(id) : null;
}

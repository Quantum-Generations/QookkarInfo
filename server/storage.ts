import { 
  users, 
  cookRegistrations, 
  inquiries,
  type User, 
  type InsertUser,
  type CookRegistration,
  type InsertCookRegistration,
  type Inquiry,
  type InsertInquiry
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createCookRegistration(registration: InsertCookRegistration): Promise<CookRegistration>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getCookRegistrationByEmail(email: string): Promise<CookRegistration | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createCookRegistration(registration: InsertCookRegistration): Promise<CookRegistration> {
    const [cookReg] = await db
      .insert(cookRegistrations)
      .values(registration)
      .returning();
    return cookReg;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [inq] = await db
      .insert(inquiries)
      .values(inquiry)
      .returning();
    return inq;
  }

  async getCookRegistrationByEmail(email: string): Promise<CookRegistration | undefined> {
    const [registration] = await db
      .select()
      .from(cookRegistrations)
      .where(eq(cookRegistrations.email, email));
    return registration || undefined;
  }
}

export const storage = new DatabaseStorage();

import { ResourceWithOptions } from "adminjs";
import { Category } from "../models";
import { categoryResourceOptions } from "./resources/category";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions
  }
]
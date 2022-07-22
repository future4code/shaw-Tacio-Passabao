import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, User } from "../models";
import { categoryResourceOptions } from "./resources/category";
import { courseResourceOptions, courseResourceFeatures } from "./resources/course";
import { episodeResourceOptions, episodeResourceFeatures } from "./resources/episode";
import { userResourceOptions } from "./resources/user";


export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures
  },
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
    {
    resource: User,
    options: userResourceOptions
  }
]
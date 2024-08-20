import { getFolderParents } from "../folders/[fid]/files";

function cronJob() {
  getFolderParents(process.env.TARGET_FOLDER!);
}

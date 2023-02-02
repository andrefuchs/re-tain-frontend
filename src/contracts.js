import { ENV } from "./consts";

let referenceContract;

if (["dev", "staging"].includes(ENV)) {
    referenceContract = "KT1HxKqrPb5oax9PvD1kfUTfi34cupNDjynT";
} else if (ENV === "prod") {
    referenceContract = "KT1HxKqrPb5oax9PvD1kfUTfi34cupNDjynT";
}

export default referenceContract;

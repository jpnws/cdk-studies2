import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { S3Bucket } from "./constructs/s3bucket";

export class WebStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here.
    const bucket = new S3Bucket(this, "MyRemovableBucket", {
      environment: "development",
    });
  }
}

import * as cdk from "aws-cdk-lib";
import {aws_s3 as s3} from "aws-cdk-lib";
import { Construct } from "constructs";
import { NagSuppressions } from "cdk-nag";

export class BaseStack extends cdk.Stack {
    bucket: s3.Bucket;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.bucket = new s3.Bucket(this, "Bucket", {
            enforceSSL: true
        });

        NagSuppressions.addResourceSuppressions(this.bucket, [
            {id: "AwsSolutions-S1", reason: "Access Logs Not Needed"}
        ]);
    }
}

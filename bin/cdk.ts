#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { BaseStack } from "../lib/base.ts";
import { AwsSolutionsChecks } from "cdk-nag";
import { Aspects } from "aws-cdk-lib";

const app = new cdk.App();
const stack = new BaseStack(app, "BaseTask", {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION
    }
});

Aspects.of(stack).add(new AwsSolutionsChecks({
    verbose: true,
}));

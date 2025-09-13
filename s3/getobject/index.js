// 1. Crete a IAM user donot gave access to aws console beacuse it's a programtic user
// 2. Go to Security Credential and create access key
// 3. Copy the access key and secret key

const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

async function getObjectUrl(key) {
  const command = new GetObjectCommand({
    Bucket: "",
    Key: key,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: 10 });

  return url;
}

async function init() {
  const url = await getObjectUrl("harpreet.jpg");
  console.log({ url });
}

init();

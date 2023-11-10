const { S3} = require("aws-sdk");

const uuid = require("uuid")

exports.s3Uploadv2 = async (file) => {

	const s3 = new S3();
	const param = {
		Bucket: process.env.AWS_BUCKET_NAME,
		Key: file,
		// Key: `uploads/members${uuid.v4()}-${file.originalname}`,
		Body: file
	};
	return await s3.upload(param).promise()
}




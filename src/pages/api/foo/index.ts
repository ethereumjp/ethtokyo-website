import type { NextApiRequest, NextApiResponse } from "next";

type SubmittedRecord = {
  name: string;
  organization: string;
  email: string;
  wallet: string;
  inquiry: string;
  privacy: boolean;
};

type ResponseData = {
  message: string;
  posted: SubmittedRecord;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | string>,
) {
  switch (req.method) {
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed.`);
    }
  }
}

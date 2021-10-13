// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 
 
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma-client';
import NextCors from 'nextjs-cors';
type Data = {
  name: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
  if (req.method !== 'POST') {
    const { limit=1 } = req.query
    
    // const users = [{name:'A',id:1,email:'x'},{name:'B',id:21,email:'Y'},{name:'C',id:10,email:'Z'}]
    const users = await prisma.user.findMany({take:Number(limit)});
    return res.status(200).json({ users });
  }
}

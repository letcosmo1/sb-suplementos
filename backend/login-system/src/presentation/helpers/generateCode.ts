import { createClient } from "redis";
const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

export const generateCode = async (idUser: any) => {
  const userID = idUser.id;
    
  var chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  var charLength = chars.length;
  var code = "";
  for (var i = 0; i < 10; i++) {
    code += chars.charAt(Math.floor(Math.random() * charLength));
  }

  await client.connect();
  await client.set(code, code + " " + userID, { EX: 300 });
  var result = await client.get(code);
  client.disconnect();
  
  return result;
};

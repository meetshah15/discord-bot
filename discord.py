import discord
from discord.ext import commands

token = 'NzY1NjI2OTU2OTY3ODM3NzE3.X4Xjqw.2LAWE9k1tKaF_KKPJEqYal6dylU';
client = commands.Bot(command_prefix = '.')

@client.event
async def on_ready():
    print('Bot is ready.')


client.run(token)
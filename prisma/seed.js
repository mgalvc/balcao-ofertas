import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
	const coins = await prisma.coin.upsert({
		where: {},
		update: {},
		create: [
			{
				name: 'Bitcoin',
				symbol: 'BTC'
			},
			{
				name: 'Ethereum',
				symbol: 'ETH'
			},
			{
				name: 'Dogecoin',
				symbol: 'DOGE'
			}
		]
	})
	const user = await prisma.user.create({
		data: {
			email: faker.internet.email(),
			name: faker.person.fullName(),
			wallets: {
				create: [
					{
						name: 'Wallet 1',
						balances: {
							create: [
								{
									coin: coins[0],
									amount: 10
								}
							]
						}
					}
				]
			}
		}
	})
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
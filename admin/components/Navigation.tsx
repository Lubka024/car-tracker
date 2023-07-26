import { Component, HasRole, Menu, Stack } from '@contember/admin'
import { CarIcon, DotIcon, UserIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<CarIcon />
				<>
					Cars
				</>
			</Stack>}
			to="admin/car/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<DotIcon />
				<>
					Rides
				</>
			</Stack>}
			to="admin/ride/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<UserIcon />
				<>
					Users
				</>
			</Stack>}
			to="admin/user/list"
		/>
	</HasRole>
	<HasRole role={roles => roles.has('driver')}>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<CarIcon />
				<>
					Cars
				</>
			</Stack>}
			to="driver/car/list"
		/>
		<Menu.Item
			title={<Stack direction="horizontal" gap="default" align="center">
				<DotIcon />
				<>
					Rides
				</>
			</Stack>}
			to="driver/ride/list"
		/>
	</HasRole>
</Menu>)

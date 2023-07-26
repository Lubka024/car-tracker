import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, EnumCell, Field, GenericCell, HasOneSelectCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				User detail
			</SlotSources.Title>
			<DetailScope entity="User(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/user/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Users
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/user/edit(id: $entity.id)">
						Edit user
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="email" label="Email" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="role" label="Role" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
					<Box className="box">
						<div className="box-header">
							<Stack direction="horizontal" justify="space-between">
								<h2 className="text-lg font-bold">
									Rides
								</h2>
								<LinkButton to="admin/ride/create">
									Create new ride
								</LinkButton>
							</Stack>
						</div>
						<DataGrid entities="Ride[user.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/ride/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<HasOneSelectCell
								field="car"
								header="car"
								options="Car"
								optionLabel={<>
									License plate{': '}
									<Field field="licensePlate" />
								</>}
								lazy={false}
							/>
							<EnumCell options={{ personal: 'personal', corporate: 'corporate' }} field="purpose" header="Purpose" />
							<TextCell field="destination" header="Destination" />
							<NumberCell field="endMileage" header="End mileage" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}

import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, EnumCell, GenericCell, LinkButton, NumberCell, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Car detail
			</SlotSources.Title>
			<DetailScope entity="Car(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/car/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Cars
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/car/edit(id: $entity.id)">
						Edit car
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="model" label="Model" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="licensePlate" label="License plate" labelPosition="labelLeft" />
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
						<DataGrid entities="Ride[car.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/ride/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
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

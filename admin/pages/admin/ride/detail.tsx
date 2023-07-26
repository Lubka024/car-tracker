import { Box, DetailScope, DisplayTextField, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Ride detail
			</SlotSources.Title>
			<DetailScope entity="Ride(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/ride/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Rides
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/ride/edit(id: $entity.id)">
						Edit ride
					</LinkButton>
				</SlotSources.Actions>
				<Stack direction="vertical" gap="xlarge">
					<Box className="box">
						<Stack direction="vertical">
							<div className="box-item">
								<DisplayTextField field="purpose" label="Purpose" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="destination" label="Destination" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="endMileage" label="End mileage" labelPosition="labelLeft" />
							</div>
							<div className="box-item">
								<DisplayTextField field="user.name" label="User" labelPosition="labelLeft" />
							</div>
						</Stack>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}

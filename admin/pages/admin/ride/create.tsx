import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { RideForm } from '../../../components/forms/RideForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create ride
			</SlotSources.Title>
			<CreateScope entity="Ride" redirectOnSuccess="admin/ride/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create ride" labelSaved="Create ride" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/ride/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Rides
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<RideForm />
				</>
			</CreateScope>
		</>
	)
}

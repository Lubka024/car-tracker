import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { RideForm } from '../../../components/forms/RideForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit ride
			</SlotSources.Title>
			<EditScope entity="Ride(id=$id)" redirectOnSuccess="admin/ride/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/ride/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<RideForm />
			</EditScope>
		</>
	)
}

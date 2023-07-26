import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CarForm } from '../../../components/forms/CarForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit car
			</SlotSources.Title>
			<EditScope entity="Car(id=$id)" redirectOnSuccess="admin/car/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/car/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<CarForm />
			</EditScope>
		</>
	)
}

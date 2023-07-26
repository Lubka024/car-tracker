import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { CarForm } from '../../../components/forms/CarForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create car
			</SlotSources.Title>
			<CreateScope entity="Car" redirectOnSuccess="admin/car/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create car" labelSaved="Create car" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/car/list" size="small" className="mr-2" distinction="outlined">
						<Stack direction="horizontal" gap="small">
							<ArrowLeftIcon />
							Cars
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<CarForm />
				</>
			</CreateScope>
		</>
	)
}

import { DataGridScope, GenericCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Cars
			</SlotSources.Title>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Car" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="driver/car/detail(id: $entity.id)">
						Open detail
					</LinkButton>
				</GenericCell>
				<TextCell field="model" header="Model" />
				<TextCell field="licensePlate" header="License plate" />
			</DataGridScope>
		</>
	)
}

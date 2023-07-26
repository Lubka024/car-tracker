import { DataGridScope, EnumCell, Field, GenericCell, HasOneSelectCell, LinkButton, NumberCell, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Rides
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="driver/ride/create">
					Create new ride
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="Ride" itemsPerPage={50}>
				<GenericCell shrunk canBeHidden={false}>
					<LinkButton to="driver/ride/detail(id: $entity.id)">
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
			</DataGridScope>
		</>
	)
}

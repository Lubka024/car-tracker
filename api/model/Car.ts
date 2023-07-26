import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { driverRole } from './acl'
import { Ride } from './Ride'

@acl.allow(driverRole, {
	read: true,
})
export class Car {
	model = def.stringColumn()
	licensePlate = def.stringColumn()
	rides = def.oneHasMany(Ride, 'car')
}

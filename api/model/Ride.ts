import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { driverRole, personIdDriverVariable } from './acl'
import { RidePurpose } from './enum'
import { Car } from './Car'
import { User } from './User'

@acl.allow(driverRole, {
	when: { personId: personIdDriverVariable },
	read: true,
	create: true,
	update: true,
})
export class Ride {
	personId = def.uuidColumn()
	car = def.manyHasOne(Car, 'rides')
	purpose = def.enumColumn(RidePurpose)
	destination = def.stringColumn()
	endMileage = def.intColumn()
	user = def.manyHasOne(User, 'rides')
}

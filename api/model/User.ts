import { AclDefinition as acl, SchemaDefinition as def } from '@contember/schema-definition'

import { driverRole, personIdDriverVariable } from './acl'
import { UserRole } from './enum'
import { Ride } from './Ride'

@acl.allow(driverRole, {
	when: { personId: personIdDriverVariable },
	read: true,
	update: true,
})
export class User {
	personId = def.uuidColumn()
	name = def.stringColumn()
	email = def.stringColumn()
	role = def.enumColumn(UserRole)
	rides = def.oneHasMany(Ride, 'user')
}

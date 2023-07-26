import { AclDefinition as acl } from '@contember/schema-definition'


export const driverRole = acl.createRole('driver', { stages: '*', s3: { ['**']: { upload: true, read: true } } })
export const personIdDriverVariable = acl.createPredefinedVariable('personId', 'personID', driverRole)

public with sharing class ContactListObj {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccount(Integer queryLimit, Integer queryOffset) {
        List<Account> accList;
        if(
            Account.SObjectType.getDescribe().isAccessible() &&
            Schema.SObjectType.Account.fields.Name.isAccessible() &&
            Schema.SObjectType.Account.fields.Id.isAccessible()
        ) {
            accList = [SELECT Id, Name FROM Account LIMIT :1000];
        }
        
        return accList;
    }
    @AuraEnabled
    public static List<Contact> getContacts(String accountId) {
        List<Contact> conList;
        if(
            Contact.SObjectType.getDescribe().isAccessible() &&
            Schema.SObjectType.Contact.fields.LastName.isAccessible() &&
            Schema.SObjectType.Contact.fields.accountId.isAccessible()
        )
        {
            conList = [SELECT Id,LastName,AccountId FROM Contact WHERE AccountId=:accountId LIMIT 10000];
        }
        return conList;
    }
}

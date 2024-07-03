<?php

class Database
{

    public static $connnection;

    public static function setupConnection()
    {

        if (!isset(Database::$connnection)) {
            Database::$connnection =  new mysqli("localhost", "root", "Yasith@1.", "allionzdb", "3306");
        }
    }

    public static function iud($q)
    {
        Database::setupConnection();
        Database::$connnection->query($q);
    }

    public static function search($q)
    {
        Database::setupConnection();
        $resultset = Database::$connnection->query($q);
        return $resultset;
    }
}

?>
